# Codex rules pack — ASD website

Copy the contents of this directory into the root of your existing Astro repository. Do not replace an existing AGENTS.md blindly: merge its valid project-specific rules.

1. Check `AGENTS.md` references and adjust actual repository paths.
2. Read `docs/architecture/stylex.md` for the Tailwind CSS and Tailwind Variants contract; theme values live in `src/shared/styles/shadcn.css`.
3. If your repo already has `src/` structure, migrate by slice in small PRs; don't reorganize everything in one task.
4. Install Pillow only for the optional image processing script (`python -m pip install Pillow`).
5. Provide approved images in `assets/master/` before generating responsive versions.

Sample image command:
`python tools/images/build.py assets/master/skater.png public/images/generated/skater --widths 480 768 1024 1440`

Important: no remote image editing, background removal, image generation, or automatic aesthetic consistency is claimed. Those steps require approved creative edits, then deterministic export with this pipeline.
