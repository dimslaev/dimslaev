# AGENTS.md

## Writing prose

- Use standard sentence case. Every sentence starts with a capital letter - body text, headings, and list items included. Do **not** write all-lowercase prose, not even in drafts or notes.
- The only place lowercase is the convention is the frontmatter `title` of a blog post (see existing posts). Leave those as the author wrote them; everything else is sentence case.
- Use a plain hyphen `-`, never em or en dashes (`—` `–`). For an aside, rephrase or use commas or parentheses.
- House voice for posts: 1-2 sentence intro, then straight to the point. Plain language over jargon. Restrained markdown - few headings, few bullets, no bold on every other phrase. When in doubt, write like Julia Evans.

## Blog structure

- Posts live in `src/content/writing/*.md`.
- Frontmatter schema (`src/content/config.ts`): `title` (string), `date` (string, `YYYY-MM-DD`), `desc` (string).
