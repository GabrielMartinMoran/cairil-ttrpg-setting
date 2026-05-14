---
name: ttrpg-narrative
description: Use this skill whenever the task involves campaign narrative structure: session notes, factions, arcs, missions, secrets, rumors, world events, or coherence review. Always pair it with `vault-conventions`. For NPCs use `npc-generation`. For settlements use `settlement-builder`.
---

# TTRPG Narrative Skill

Load `vault-conventions` first. This skill owns narrative structure and DM-facing
playability, not the shared vault rules.

## Estilo narrativo del DM — obligatorio respetarlo en todo el contenido

### Líneas de tiempo
- Los eventos del mundo ocurren **independientemente** de los PJs — el mundo no espera
- Se distingue claramente entre lo que **pasó** (sesiones) y lo que **va a pasar** (diseño narrativo)
- Las consecuencias son reales si los PJs no intervienen

### Tono de campaña
- Las campañas mezclan **humor grupal** con **dureza real** en los arcos principales
- El humor surge de los personajes y las situaciones, nunca del narrador
- La crueldad y la consecuencia deben sentirse reales — las decisiones importan

### Reglas generales
- No inventar hechos que no estén en el contexto provisto — si no se sabe, se deja en `[?]` o se pregunta
- No asumir el sistema de reglas — este sistema es **Arcana**, no D&D 5e ni ningún otro
- No crear contenido genérico — cada elemento tiene algo que lo hace único

## Sesiones

Cuando la tarea documenta lo que ya pasó, tratala como registro factual de
sesión.

### Estructura mínima para sesiones

Usá esta estructura base cuando el material de entrada sea una sesión ya jugada.

```markdown
## Preparación
- [ ] [pendientes]

## Notas del DM
- [recordatorios importantes]

## Resumen
- [hechos en orden cronológico]

## NPCs involucrados
- [[ruta completa]]

## Secretos descubiertos
- [descubrimientos]

## Línea de tiempo activada
- [eventos del mundo]
```

No inventes hechos ausentes. Si algo es ambiguo, marcá `[?]`.

## Arcos, misiones y futuro narrativo

Cuando la tarea trabaja sobre lo que va a pasar, estructurá el resultado en este
orden:

1. **Estado actual**
2. **Propuesta**
3. **Consecuencias ramificadas**
4. **Señales para el DM**

Diseñá posibilidades, no destinos fijos.

## Secretos y rumores

Usá tablas de secretos cuando la tarea lo pida o cuando un lugar, NPC o facción
necesite material jugable de descubrimiento.

```markdown
| d20 | Secreto/Rumor | Fuente | Descubierto |
|-----|--------------|--------|-------------|
| 1   | ...          | ...    | NO          |
```

Actualizá `Descubierto` a `SÍ (Sesión N)` cuando corresponda.
