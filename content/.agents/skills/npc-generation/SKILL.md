---
name: npc-generation
description: Use this skill whenever you create or substantially rewrite an NPC for this campaign. It defines the NPC format, brevity rules, and table-ready fields. Always pair it with `vault-conventions`.
---

# Generación de NPCs (Sistema Arcana) - Modo GM Friendly

Load `vault-conventions` first so filenames, tags, wikilinks, and tone stay
consistent with the vault.

**REGLA DE ORO:** La prioridad es la facilidad de uso en mesa. Evita la prosa excesiva. El DJ debe poder escanear el personaje en segundos.

## Input — si no se provee, generar aleatoriamente respetando lógica racial (consultar arcana-reference)

- **Nombre:** Temático y pronunciable
- **Raza:** coherente con el mundo
- **Género:** Masculino, Femenino, Sin Género
- **Profesión:** Ocupación principal
- **Edad:** Niño, Adulto, Anciano — coherente con la raza
- **Altura:** En metros, respetando rangos raciales

## Output — perfil directo y esquemático

### A. Perfil Psicológico (bullet points, no novelas)
1. **Personalidad:** 2-3 adjetivos fuertes ("Nervioso", "Leal", "Sarcástico")
2. **Ideal:** Brújula moral en una frase
3. **Defecto:** Debilidad explotable
4. **Objetivo:** Qué quiere AHORA MISMO
5. **Secreto:** Algo que oculta — jugable
6. **Equipo Clave:** Solo objetos relevantes, mágicos o distintivos

### B. Biografía
1. **Resumen:** 1-2 oraciones máximo. Quién es y qué hace.
2. **Trasfondo:** Máximo 1-2 párrafos. Priorizar ganchos y conflictos actuales sobre historia antigua.

## Template exacto de salida

```markdown
---
tipo: npc
nombre: [Nombre]
faccion: [facción si aplica]
locacion: [base]
campania: [nombre campaña]
---

### [Nombre del NPC]
`[Raza] | [Género] | [Edad] años | [Altura] m | [Profesión]`

* **Personalidad:** [Adjetivo], [Adjetivo].
* **Ideal:** [Frase corta].
* **Defecto:** [Frase corta].
* **Objetivo:** [Meta inmediata].
* **Secreto:** [Dato oculto jugable].
* **Equipo:** [Objeto A], [Objeto B].

> **Resumen:** [1-2 oraciones].

**Trasfondo:**
[Párrafo 1: origen breve y contexto actual.]

[Párrafo 2 opcional: conflicto o motivación extra.]

<!-- Statblock de Arcana (solo si se generó una URL con arcana-statblock-builder) -->
<iframe src="[URL con readonly=1]" width="100%" height="620" style="border:none;border-radius:8px;"></iframe>
```
