---
name: vault-researcher
description: Use this skill whenever you must investigate the vault before writing or validating content. It is the default skill for “what already exists?” questions, DM pattern checks, pending-note audits, and pre-write context gathering. Always pair it with `vault-conventions`.
---

# Vault Researcher Skill

Load `vault-conventions` first so you apply the current file, link, tone, and
Mind rules before inspecting anything else.

## Cuándo aplicar

Antes de crear cualquier contenido nuevo: NPC, locación, arco, sesión, criatura. La pregunta que respondés es "¿qué existe ya y qué debemos respetar?"

## Proceso de investigación

1. **Consultá Mind primero** — usá `projects/Sombras de Cairil` para contexto reciente sin leer archivos
2. **Leer archivos solo si Mind no tiene suficiente** — leé 2-3 archivos representativos, no el vault completo
3. **Sintetizás** — devolvés estructura concisa, nunca volcados

## Template de output obligatorio

```
## Estado actual sobre [tema]

**Existe:**
- [elemento] — [1 línea de qué contiene]

**Patrones del DM:**
- [patrón observado en el vault]

**Pendiente / incompleto:**
- [lo que falta o quedó sin terminar]

**Vínculos relevantes:**
- [otros elementos que se conectan con wikilinks]

**Recomendación:**
[1-2 líneas: qué respetar o evitar al crear contenido nuevo]
```

## Límites

- Máximo 2-3 archivos leídos por investigación
- Si hay muchos archivos del mismo tipo, leé los más recientes y generalizá
- Nunca retornés el contenido raw de un archivo — siempre sintetizás
- Si no encontrás nada relevante, decilo explícitamente: "No existe contenido previo sobre X"
