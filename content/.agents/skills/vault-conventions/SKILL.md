---
name: vault-conventions
description: Use this skill for ANY task in this repository that researches, creates, edits, or validates vault content, prompts, or repo-local skills. Load it first so filenames, wikilinks, frontmatter, tone, and the active Mind space stay consistent.
---

# Vault conventions

This is the canonical shared conventions skill for `Sombras de Cairil`.
Load it before any research, writing, or validation task in this repo.

## Source of truth

AGENTS.md remains the canonical source for vault structure, naming, wikilinks, tone, and editing conventions. The active Mind runtime is defined in `.agents/nas.config.yaml`.

If you see older references to `ttrpg-campaigns/Sombras de Cairil`, treat them
as legacy wording. The active Mind project space for current work is
`projects/Sombras de Cairil`.

## File structure and naming

Use the vault structure defined in `AGENTS.md` under
`Campaña - Sombras de Cairil/`.

### Naming rules

Aplicá estas reglas de nombre antes de crear o renombrar cualquier archivo.

- Keep filenames in UTF-8.
- Do not add numeric prefixes like `00 -` or `10 -`.
- Do not wrap filenames in quotes.
- Put the emoji in the filename when the note type requires it.

### Emoji rules

Usá estos emojis en el nombre del archivo según el tipo de nota.

- `📍` Lugares
- `📖` Arcos
- `🗺️` Mapas
- `👤` NPCs
- `🎭` Personajes
- `👑` Objetos mágicos
- `👥` Grupos o facciones
- Misiones: emoji contextual
- Criaturas: emoji por arquetipo

## Frontmatter and tags

Frontmatter is recommended for structured data.

- Tags go in lowercase.
- Tags do not use accents.
- Separate words with `-`.
- Prefer prefixes like `tipo:`, `locacion:`, `faccion:`, `arco:`, `nivel:`.

The vault hides frontmatter in preview via
`.obsidian/snippets/hide-frontmatter.css`; keep frontmatter machine-friendly.

## Wikilinks and headings

Use full vault paths in wikilinks to avoid ambiguity.

Examples:

- `[[NPCs/📍 Puerto Bruma/👤 Lord Corvin Hest|Lord Corvin Hest]]`
- `[[Objetos Mágicos/👑 Núcleo de Umbra|Núcleo de Umbra]]`

Do not alter links to external campaigns unless the user explicitly asks.

Do not add an H1 that duplicates the filename exactly. Prefer H2 or lower for
visible section titles inside notes and templates.

## Tone and editing expectations

The campaign tone is `humor de mesa + horror progresivo`.

- Keep content concrete and playable.
- Large edits should end with link validation.
- Avoid generic prose when a sharper table-ready formulation works better.

## Mind runtime protocol for this repo

Use `projects/Sombras de Cairil` as the active project space.

### Session start

Este es el arranque mínimo para recuperar contexto sin desviarte del runtime
actual.

1. Query checkpoints.
2. Load the active checkpoint if one exists.
3. Read project context from the current project space.
4. Continue work with the current config, not the legacy space name.

### Memory discipline

Estas reglas mantienen la continuidad entre sesiones y entre agentes.

- Save important decisions, discoveries, and patterns to the project space.
- Keep session checkpoints current during longer tasks.
- If a subagent is read-only, return suggested memory writes instead of writing.

## Prompt and skill markdown quality

When editing prompt or skill files in this repo:

- Use clear headings.
- Add a short overview paragraph after each heading before lists.
- Keep responsibilities, constraints, and workflows easy to scan.
- Prefer one canonical instruction source over duplicated rules.
