# Small-task contract

Every Codex task should specify:

```
Goal: one user-visible outcome
Inputs: relevant reference and approved assets
Scope: allowed files/slices
Constraints: architecture/style/design rules (refer to AGENTS.md)
Acceptance: observable result and targeted validation
Out of scope: explicitly excluded changes
```

## Token discipline
- Do not load every markdown file by default: AGENTS.md + relevant domain doc + local skill only.
- Do not paste full source files in chat when a path/diff suffices.
- Use `rg` scoped to affected slices; avoid repository-wide dumps.
- One task per branch/PR when feasible; no automatic merge.
- No speculative refactor, no broad test suites until needed, no repeated builds.
- If blocked by an asset, API or ambiguous requirement, stop and report one concrete blocker.

## Suggested task example
Goal: add a one-shot golden trail on a transparent Canvas over the approved skater master.
Inputs: approved `assets/master/skater.webp`, reference screenshot.
Scope: `src/widgets/hero/**` only.
Constraints: follow AGENTS.md; responsive Canvas scaling; reduced-motion fallback.
Acceptance: draw exactly once, hold final trail, no baked-in trail, desktop/mobile visual check.
Out of scope: navigation, typography, unrelated pages, image generation.
