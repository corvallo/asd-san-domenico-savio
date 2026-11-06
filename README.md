# Codex rules pack — ASD website

Copy the contents of this directory into the root of your existing Astro repository. Do not replace an existing AGENTS.md blindly: merge its valid project-specific rules.

1. Check `AGENTS.md` references and adjust actual repository paths.
2. Confirm the location of the existing `stylex-variants` skill. Keep it as the authoritative API reference; do not duplicate its content here.
3. If your repo already has `src/` structure, migrate by slice in small PRs; don't reorganize everything in one task.
4. Install Pillow only for the optional image processing script (`python -m pip install Pillow`).
5. Provide approved images in `assets/master/` before generating responsive versions.

Sample image command:
`python tools/images/build.py assets/master/skater.png public/images/generated/skater --widths 480 768 1024 1440`

Important: no remote image editing, background removal, image generation, or automatic aesthetic consistency is claimed. Those steps require approved creative edits, then deterministic export with this pipeline.

## Install the official StyleX Variants skill

Run `bash tools/install-stylex-variants-skill.sh` once from the repository root. The script downloads the official skill **and its references**, rather than shipping a potentially stale copy. Requires internet access. Codex then reads `.agents/skills/stylex-variants/SKILL.md` when relevant.
