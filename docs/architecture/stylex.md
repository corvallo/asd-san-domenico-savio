# StyleX and stylex-variants

The repo's existing stylex-variants skill is the source of truth for imports, `sxv` signatures, slots, and variant composition. **Read that skill; do not approximate its API.** Check installed package exports and one local working example if necessary.

- Use `@stylexjs/stylex` for style declarations and theme variables.
- Use the repo's `@stylex-variants/core` for actual component variants; do not reimplement a variant engine.
- Prefer semantic tokens and `stylex.createTheme` for scoped theme overrides; avoid hardcoded colors in components.
- Design tokens in `src/shared/styles/`; shared UI primitives in `src/shared/ui/`.
- Follow four-file component convention where justified: `name.tsx`, `name.styles.ts`, `name.types.ts`, `index.ts`. Do not force it on tiny Astro-only wrappers.
- No inline styles, Tailwind, CSS modules, styled-components, CVA or Radix.
- Never assume StyleX transforms `.astro` frontmatter. Put StyleX styling in compiled TSX; check actual Astro/Vite plugin setup and production build.
- Reuse existing primitives and tokens before creating new ones.

## Before committing changes
Check StyleX extraction in production, correct variant behavior, light/dark scoped themes and responsive breakpoints. Use the project's existing scripts, not invented commands.
