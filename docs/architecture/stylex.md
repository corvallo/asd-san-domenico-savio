# Tailwind CSS and Tailwind Variants

The filename is retained for existing links. The styling stack is Tailwind CSS v4 with `@tailwindcss/vite` and `tailwind-variants`.

- Use `src/shared/styles/shadcn.css` as the theme source. Do not recreate the removed StyleX token modules.
- Prefer semantic utilities such as `bg-background`, `text-foreground`, `bg-primary` and `border-border`.
- Use `tv` from `tailwind-variants` for variants and slots; infer types with `VariantProps`.
- Write class lists in multiline backtick template literals, one utility per line. Separate categories with blank lines: position, layout, dimensions, spacing, typography, colors, borders, effects/interactions, states and responsive rules. Keep variant names in `defaultVariants` as ordinary strings.
- Recipes return class strings: use `className={recipe(...)}` in React and `class={recipe(...)}` in Astro. Slot recipes return slot functions: `recipe().root()`.
- Pass class overrides into the recipe with `className` so Tailwind Variants can resolve conflicts.
- Keep utility names statically discoverable. Use arbitrary values and media variants when needed to preserve approved sizes and exact breakpoints.
- Shared UI primitives live in `src/shared/ui/`; retain the existing FSD slices and component files.
- The existing reset stays in the base layer of `global.css`; Tailwind Preflight is not imported. Utilities must be able to override the reset.
- No StyleX, inline styles, Astro scoped CSS, CSS modules, styled-components, CVA or Radix.

## Before committing changes

Check variant defaults, slot output, focus/disabled states, reduced motion and responsive breakpoints. Run targeted formatting/lint and a production build when changing styling integration. Report any limits on visual verification.
