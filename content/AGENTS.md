# AGENTS.md — Sombras de Cairil

Este vault de Obsidian contiene la campaña de D&D **Sombras de Cairil**, ambientada en **Las Tierras del Alba**. Es el punto de encuentro entre el lore migrado de herramientas legacy y el contenido activo de la campaña. Este documento explica cómo está organizado y cómo trabajar con él.

---

## 📁 Estructura del repositorio

```
/
├── AGENTS.md                          ← Este archivo
├── Forgotten Lands - export.json      ← Export legacy (YA MIGRADO a Lugares/)
├── Las Tierras del Alba - export.json ← Export legacy (YA MIGRADO a Lugares/)
├── Ultimo Suspiro - export.json       ← Export legacy de otro DM (parcialmente migrado)
│
├── Las Tierras del Alba/
│   ├── 🗺️ Las Tierras del Alba.md     ← Mapa interactivo Leaflet
│   └── Lugares/                        ← 44 notas de locaciones
│       ├── 🏙️ Elyok.md
│       ├── 🌲 El bosque encantado.md
│       └── ... (44 archivos)
│
├── NPCs/                               ← (vacío — para futuros NPCs)
├── El Dolmix/                          ← (vacío — para futura campaña)
│
├── .agents/skills/                     ← Skills del agente
│   ├── vault-conventions/
│   ├── vault-researcher/
│   ├── npc-generation/
│   ├── settlement-builder/
│   ├── ttrpg-narrative/
│   └── obsidian-markdown/
│
└── .obsidian/plugins/obsidian-leaflet-plugin/
    └── data.json                       ← PINS DEL MAPA (40 marcadores)
```

---

## 🗺️ Mapa Leaflet — `Las Tierras del Alba/🗺️ Las Tierras del Alba.md`

El mapa usa el plugin `obsidian-leaflet-plugin`. Los **pins se almacenan en** `.obsidian/plugins/obsidian-leaflet-plugin/data.json`, NO en el archivo `.md`.

Cada pin tiene un campo `"link"` que apunta a su nota en `Las Tierras del Alba/Lugares/`. Al hacer clic en un pin en el mapa, se abre la nota correspondiente.

### Mapa base
- **Imagen:** `https://i.imgur.com/t79AWKJ.png`
- **Zoom:** 7–10 (default: 8)
- **Centro:** lat 50, long 50

### Categorías de pins existentes (40 total)

| Icono | Tipo | Cant. | Descripción |
|-------|------|-------|-------------|
| 🏙️ | City | 20 | Ciudades grandes y pequeñas |
| 🌲 | Forest | 3 | Bosques |
| 🌴 | Jungle | 2 | Selvas / junglas |
| 🌊 | Water | 4 | Mares |
| 🏘️ | Town | 4 | Pueblos |
| ⛰️ | Mountain | 3 | Montañas / picos |
| 🌋 | Vulcan | 1 | Volcanes |
| 🏜️ | Desert | 1 | Desiertos |
| 🛕 | Temple | 1 | Templos / monasterios |
| 🌿 | Swamp | 1 | Pantanos |

> **Regla:** Siempre que añadas contenido sobre un lugar, revisá primero si ya existe un pin en el mapa. Si el lugar está en el mapa pero no tiene nota, creale una. Si tiene nota pero no pin, considera agregarlo.

---

## 📍 Convención de nombres de archivos — Emojis

Cada tipo de locación tiene un **emoji propio** en el nombre del archivo. Usalo al crear nuevas notas.

| Emoji | Tipo | Ejemplos |
|-------|------|----------|
| 🏙️ | Ciudad | Elyok, Grimreen, Dhurmedan |
| 🏘️ | Pueblo | Valdville, Puerto Bruma, Locchar |
| 🛕 | Monasterio / Templo | Jing |
| 🏰 | Fuerte / Castillo | Fuerte gris |
| 🏚️ | Ruinas | Dhagh Badur |
| 🌲 | Bosque | El bosque encantado, El bosque escondido |
| 🌴 | Selva / Jungla | La selva frondosa, La jungla impenetrable |
| ⛰️ | Montaña / Colina | Montañas blancas, Picos rocosos |
| 🌋 | Volcán | Monte Llamarada |
| 🌊 | Mar | Mar del albor, Mar gélido |
| 🏝️ | Isla | La isla perdida |
| 🏜️ | Desierto | Desierto Bocascarabajo |
| 🌿 | Pantano | El Pantano Ponzoñoso |

**Reglas:**
- El emoji va al **inicio del filename**, seguido de un espacio y el nombre del lugar.
- El campo `nombre:` en frontmatter NO lleva el emoji (solo el nombre limpio).
- Las wikilinks usan el nombre completo con emoji: `[[🏙️ Elyok]]`.

---

## 📝 Skill onboarding — Cómo usar los skills del agente

Este vault tiene skills preconfigurados en `.agents/skills/`. Cuando trabajes con el agente (`snom`):

| Para esto | Cargá este skill |
|-----------|------------------|
| Tarea general en el vault | `vault-conventions` + `vault-researcher` |
| Crear/editar una locación | `settlement-builder` |
| Crear/editar un NPC | `npc-generation` |
| Narrativa, arcos, facciones, sesiones | `ttrpg-narrative` |
| Formato Obsidian (callouts, embeds, frontmatter) | `obsidian-markdown` |
| Investigar qué existe antes de escribir | `vault-researcher` |

**Orden recomendado:** `vault-conventions` → `vault-researcher` → skill específico.

---

## 🗄️ Migración completada — JSONs legacy

Tres exports legacy fueron procesados. Los JSONs originales se conservan por referencia.

| JSON | Estado | Origen |
|------|--------|--------|
| `Las Tierras del Alba - export.json` | ✅ **Migrado completo** — 37 locaciones → notas individuales | Herramienta propia |
| `Forgotten Lands - export.json` | ✅ **Migrado parcial** — Elyok y Valdville enriquecidos; historia, lore, capítulos extraídos | Herramienta propia |
| `Ultimo Suspiro - export.json` | ✅ **Migrado parcial** — Egnia (gobierno, establecimientos) y Puerto Latón (descripción completa) extraídos | Campaña de Matías Guzmán (otro DM) |

### Lo que NO se migró de los JSONs
- Luthiel, Legarien, Viromur (body: null en todos los exports)
- Personajes de otros DMs (no mezclar)
- Lore genérico de D&D copy-paste de wikis

---

## 📍 Notas sin pin en el mapa (4)

Estos lugares existen como nota pero no tienen marcador en Leaflet. Si en algún momento se agregan al mapa, actualizar `data.json`.

- ⛰️ Colinas escarchadas
- 🌲 El bosque olvidado
- 🏰 Fuerte gris
- 🏝️ La isla perdida

---

## 🧠 Memoria persistente (mind)

Este proyecto usa el protocolo **mind** para memoria persistente entre sesiones. El espacio activo es `projects/Sombras de Cairil`.

**Antes de empezar cualquier tarea:**
1. `checkpoint_query` + `checkpoint_load` para recuperar estado
2. `memory_query` para contexto relevante

**Al tomar decisiones importantes:**
- `memory_add` con tags (`cat:decision`, `cat:pattern`, etc.)

---

## 🔄 Flujo de trabajo recomendado

1. **Investigar** — cargá `vault-researcher` + `vault-conventions` para ver qué existe
2. **Desafiar** — antes de crear, proponé mejoras, alternativas o riesgos al usuario
3. **Confirmar** — mostrá el plan antes de modificar archivos
4. **Ejecutar** — aplicá cambios de forma minimalista
5. **Auto-revisar** — verificá links, consistencia, y emojis
6. **Persistir** — guardá decisiones en mind memory

---

## 📏 Reglas de edición

- **Frontmatter obligatorio** en toda nota nueva: `tipo`, `nombre`, `categoria`, `region`, `tags`
- **Tags en lowercase**, sin acentos, separados por `-`
- **Prefijos de tags:** `locacion/`, `raza/`, `faccion/`, `arco/`, `estado/`
- **Wikilinks:** usar path completo `[[Las Tierras del Alba/Lugares/🏙️ Elyok|Elyok]]`
- **No duplicar H1** que coincide con el filename
- **Tono:** humor de mesa + horror progresivo — concreto y jugable
- **Callouts:** `> [!info]`, `> [!warning]`, `> [!danger]`, etc.
