# Feature-Sliced Design contract

## Layer order and imports
`app → views → widgets → features → entities → shared`.
An upper layer may import a lower layer, never the reverse. Modules within the same layer must not import each other across slices. `shared` cannot import any higher layer. Public imports via each slice's `index.ts` (or `.astro` entry where appropriate); internal relative imports are allowed inside a slice.

## Astro mapping
Astro reserves `src/pages` for routing, so use `src/views` for the FSD `pages` layer. `src/pages` is a thin routing adapter; no business logic or styled UI there.

```
src/
  pages/index.astro
  app/layouts/BaseLayout.astro
  app/styles/
  views/home/ui/HomePage.astro
  widgets/site-header/ui/
  widgets/hero/ui/
  features/
  entities/
  shared/ui/
  shared/lib/
  shared/styles/
  shared/assets/
```

Only create directories when used. `widgets` are independently meaningful page blocks; `features` represent user interactions; `entities` model domain concepts; `shared` is domain-agnostic. Do not put a hero in `shared`, or a reusable Button in `widgets`.

## Slice conventions
- Prefer `ui/`, `model/`, `lib/`, `api/` segments only when necessary.
- One public API per slice; no deep cross-slice imports.
- No `utils.ts` dumping ground or generic `components/` directory outside FSD.
- Keep React client islands minimal; static React can render server-side without hydration.
- Check FSD import boundaries when changing imports.

## Examples
Allowed: `widgets/hero` imports `shared/ui/button`.
Forbidden: `shared/ui/button` imports `widgets/hero`.
Forbidden: `widgets/hero` imports internals of `widgets/header`.
