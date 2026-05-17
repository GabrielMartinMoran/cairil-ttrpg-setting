const emojiMap: Record<string, string> = {
  City: "🏙️",
  Water: "🌊",
  Mountain: "⛰️",
  Town: "🏘️",
  Forest: "🌲",
  Vulcan: "🌋",
  Desert: "🏜️",
  Temple: "🛕",
  Swamp: "🌿",
  default: "📍",
}

function getEmoji(type: string): string {
  return emojiMap[type] || emojiMap.default
}

document.addEventListener("nav", async () => {
  const containers = document.querySelectorAll(".leaflet-map") as NodeListOf<HTMLElement>
  if (containers.length === 0) return

  // Leaflet CSS
  if (!document.getElementById("leaflet-css")) {
    const link = document.createElement("link")
    link.id = "leaflet-css"
    link.rel = "stylesheet"
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    document.head.appendChild(link)
  }

  // Custom label styles
  if (!document.getElementById("leaflet-custom-css")) {
    const style = document.createElement("style")
    style.id = "leaflet-custom-css"
    style.textContent = `
      .leaflet-place-label {
        background: rgba(0,0,0,0.75) !important;
        color: white !important;
        border: none !important;
        border-radius: 4px !important;
        padding: 2px 8px !important;
        font-size: 13px !important;
        font-weight: 600 !important;
        box-shadow: 0 1px 4px rgba(0,0,0,0.3) !important;
        pointer-events: none;
      }
      .leaflet-place-label.leaflet-tooltip-right:before {
        border-right-color: rgba(0,0,0,0.75) !important;
      }
    `
    document.head.appendChild(style)
  }

  // Leaflet JS
  if (!(window as any).L) {
    const script = document.createElement("script")
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
    document.head.appendChild(script)
    await new Promise<void>((resolve, reject) => {
      script.onload = () => resolve()
      script.onerror = () => reject()
    })
  }
  const L = (window as any).L

  for (const container of containers) {
    if ((container as any)._leafletMap) continue

    const config = JSON.parse(container.dataset.config || "{}")
    const markersRaw = JSON.parse(container.dataset.markers || "[]")

    const map = L.map(container, {
      crs: L.CRS.Simple,
      minZoom: -5,
      maxZoom: 10,
      zoomControl: true,
      attributionControl: false,
    })

    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = config.imageUrl

    img.onload = () => {
      const w = img.naturalWidth
      const h = img.naturalHeight

      // El plugin Obsidian Leaflet calcula bounds con scale = 2^(maxZoom-1)
      // unproject([0, h], zoom) -> LatLng(-h/scale, 0)
      // unproject([w, 0], zoom) -> LatLng(0, w/scale)
      const scale = Math.pow(2, (config.maxZoom ?? 10) - 1)
      const bounds = L.latLngBounds(
        [-h / scale, 0], // suroeste (abajo-izquierda): lat=-h/scale, lng=0
        [0, w / scale],  // noreste (arriba-derecha): lat=0, lng=w/scale
      )

      L.imageOverlay(config.imageUrl, bounds).addTo(map)

      // Usar loc directamente como coordenadas de Leaflet CRS.Simple
      // (igual que hace el plugin de Obsidian)
      const markers = markersRaw
        .filter((pin: any) => pin.locLat != null && pin.locLng != null)
        .map((pin: any) => ({
          lat: pin.locLat,
          lng: pin.locLng,
          description: pin.description || pin.link || "",
          type: pin.type || "default",
          link: pin.link || "",
          slug: pin.slug,
        }))

      // Iniciar con el zoom por defecto del mapa (más cercano que fitBounds)
      const center = bounds.getCenter()
      map.setView(center, config.defaultZoom ?? 6)

      for (const pin of markers) {
        const iconHtml = `
          <div style="font-size:20px;filter:drop-shadow(0 1px 2px rgba(0,0,0,0.5));cursor:pointer;">
            ${getEmoji(pin.type)}
          </div>
        `

        const marker = L.marker([pin.lat, pin.lng], {
          icon: L.divIcon({
            className: "leaflet-emoji-marker",
            html: iconHtml,
            iconSize: [28, 28],
            iconAnchor: [14, 14],
          }),
        }).addTo(map)

        marker.bindTooltip(pin.description, {
          permanent: true,
          direction: "right",
          offset: [10, 0],
          className: "leaflet-place-label",
        })

        const basePath = (window as any).basePath || ""
        const popupHtml = pin.slug
          ? `<a href="${basePath}/${pin.slug}.html" class="internal-link" style="font-weight:bold;">${pin.description}</a>`
          : `<span>${pin.description}</span>`

        marker.bindPopup(popupHtml)

        marker.on("click", () => {
          if (pin.slug) {
            if ((window as any).spaNavigate) {
              ;(window as any).spaNavigate("/" + pin.slug, false)
            } else {
              window.location.href = `${basePath}/${pin.slug}.html`
            }
          }
        })
      }
    }

    img.onerror = () => {
      container.innerHTML = `<p style="color:red;text-align:center;padding:1rem;">Error cargando imagen del mapa</p>`
    }

    ;(container as any)._leafletMap = map
  }
})
