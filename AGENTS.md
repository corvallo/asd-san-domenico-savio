# Codex repository contract

Read this file first. Read only the linked specification relevant to the task. Do not recursively inspect the repository.

## Non-negotiable

- Architecture: Feature-Sliced Design (FSD). Read `docs/architecture/fsd.md` before adding/moving modules.
- Astro owns routes, layouts and static composition; React only where needed. Read `docs/architecture/astro-react.md` for UI work.
- Tailwind CSS + Tailwind Variants are mandatory. Use `src/shared/styles/shadcn.css` as the theme source. Read `docs/architecture/stylex.md` (styling contract, retained path). Do not invent library APIs.
- Visual work must follow `docs/design/design-contract.md`; references are specifications, not inspiration.
- Images: `docs/design/image-pipeline.md`. Never claim background removal, style matching or responsive art direction without validating output.
- Make the smallest viable change. No unrelated refactors, dependencies, file renames or generated files.
- Never use inline styles, Astro scoped CSS, StyleX, CSS modules, CVA or Radix unless an explicit exception is approved.
- No new components/utilities without an existing consumer. Prefer existing shared primitives; avoid premature abstraction.
- Never silently change approved copy, assets, spacing, colors or motion.

## Execution budget

1. Identify target files with `rg --files <likely-path>` or scoped `rg`. Do not dump entire trees or read all files.
2. Read task-relevant instructions and at most the nearest analogous implementation.
3. State a 1–3 line plan only for nontrivial changes; then edit.
4. Run targeted formatter/typecheck/tests first; full build only if integration changes warrant it.
5. Stop after acceptance criteria are met. Do not repeatedly inspect unchanged files.

## Completion report (max 5 lines)

- Changed: paths or concise summary
- Verified: exact commands and result
- Not verified: explicit limitations
- Decisions/risks: only if material

For task conventions see `docs/workflows/task-contract.md`.
