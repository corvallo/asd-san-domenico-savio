# Astro + React

- `.astro`: route adapters, layouts, static page composition, semantic document structure.
- `.tsx`: React UI primitives or interactive components; SSR by default.
- Declare components as exported arrow functions: `export const ComponentName = (props: Props) => { ... };`.
- Add `client:load`, `client:visible`, etc. only to an interactive island with a documented reason.
- No hydration for decorative static components.
- Animation: respect `prefers-reduced-motion`; cleanup animation frames, GSAP contexts, event listeners on unmount. No perpetual animation unless the task explicitly requires it.
- Avoid unnecessary runtime dependencies. Keep visual assets out of the JS bundle where possible.
- For a one-shot hero animation, play once after asset readiness; hold the final frame. Replay only via an explicit control.
- Verify SSR/browser-only API boundaries (`window`, `document`, `canvas`) and responsive behavior.
