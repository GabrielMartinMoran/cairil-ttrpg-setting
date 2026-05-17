import { QuartzTransformerPlugin } from "../types"
import { BuildCtx } from "../../util/ctx"
import { FilePath, slugifyFilePath } from "../../util/path"
import { readFileSync } from "fs"
import { join } from "path"

function cleanName(name: string): string {
  return name
    .replace(/^(\s*[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]+\s*)/u, "")
    .trim()
}

function findSlugForLink(ctx: BuildCtx, link: string): string | null {
  if (!link) return null
  const cleanLink = cleanName(link)
  for (const fp of ctx.allFiles) {
    const fpStr = fp as string
    if (fpStr.endsWith(".md")) {
      const basename = fpStr.split("/").pop() || ""
      const basenameWithoutExt = basename.replace(/\.md$/, "")
      const cleanBasename = cleanName(basenameWithoutExt)
      if (cleanBasename === cleanLink || basenameWithoutExt === link) {
        return slugifyFilePath(fp as FilePath)
      }
    }
  }
  return null
}

function extractUrl(s: string): string {
  const m = s.match(/\((.*?)\)/)
  return m ? m[1] : s
}

function parseLeafletConfig(text: string): Record<string, any> {
  const config: Record<string, any> = {}
  for (const line of text.split("\n")) {
    const match = line.match(/^(\w+):\s*(.*)$/)
    if (match) {
      const key = match[1]
      let value: any = match[2].trim()
      // quitar comillas envolventes
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1)
      }
      // parsear tipos
      if (/^-?\d+$/.test(value)) value = parseInt(value)
      else if (/^-?\d+\.\d+$/.test(value)) value = parseFloat(value)
      else if (value === "true") value = true
      else if (value === "false") value = false
      config[key] = value
    }
  }
  return config
}

export const Leaflet: QuartzTransformerPlugin = () => {
  return {
    name: "Leaflet",
    textTransform(ctx: BuildCtx, src: string) {
      const leafletRegex = /```leaflet\s*\n([\s\S]*?)(?:\n```|$)/g

      return src.replace(leafletRegex, (_match, blockContent) => {
        try {
          const config = parseLeafletConfig(blockContent)
          if (!config || !config.id) return _match

          const dataPath = join(
            ctx.argv.directory,
            ".obsidian",
            "plugins",
            "obsidian-leaflet-plugin",
            "data.json",
          )
          let leafletData: any = {}
          try {
            leafletData = JSON.parse(readFileSync(dataPath, "utf-8"))
          } catch {
            return _match
          }

          const mapMarker = leafletData.mapMarkers?.find((m: any) => m.id === config.id)
          if (!mapMarker) return _match

          let imageUrl = extractUrl(config.image || "")
          if (!imageUrl && mapMarker.mapViewParameters?.image) {
            imageUrl = extractUrl(mapMarker.mapViewParameters.image)
          }

          const markers = (mapMarker.markers || []).map((pin: any) => {
            const slug = findSlugForLink(ctx, pin.link)
            return {
              locLat: pin.loc?.[0] ?? null,
              locLng: pin.loc?.[1] ?? null,
              percentLat: pin.percent?.[0] ?? null,
              percentLng: pin.percent?.[1] ?? null,
              description: pin.description || pin.link || "",
              type: pin.type || "default",
              link: pin.link || "",
              slug,
            }
          })

          const mapConfig = {
            id: config.id,
            imageUrl,
            height: config.height || "500px",
            minZoom: config.minZoom ?? 7,
            maxZoom: config.maxZoom ?? 10,
            defaultZoom: config.defaultZoom ?? 8,
            lat: config.lat ?? 50,
            long: config.long ?? 50,
          }

          const escapedConfig = JSON.stringify(mapConfig).replace(/"/g, "&quot;")
          const escapedMarkers = JSON.stringify(markers).replace(/"/g, "&quot;")

          return `<div class="leaflet-map" data-config="${escapedConfig}" data-markers="${escapedMarkers}" style="height:${mapConfig.height};width:100%;"></div>`
        } catch (e) {
          console.error("[Leaflet] transform error:", e)
          return _match
        }
      })
    },
  }
}
