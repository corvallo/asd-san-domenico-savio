# Image pipeline and art direction

## Two separate operations
A. **Deterministic processing** (automatable locally): normalize color profile to sRGB, crop, resize, convert WebP/AVIF, compress, emit srcset sizes, record metadata.
B. **Creative editing** (requires image editor/model and approval): remove background, replace environment, relight, remove objects, preserve face/garment identity, generate transparent cutout. Do not pretend Pillow/Sharp can do reliable creative editing.

## Asset contract
- Source assets in `assets/source/` (keep originals, never overwrite).
- Approved retouched masters in `assets/master/` (e.g. RGBA cutout + separate background).
- Generated responsive assets in `public/images/generated/`.
- Document image provenance and approval; never claim that a generated image is the same photograph if it isn't.
- Prefer transparent WebP/PNG for cutout subjects; background as separate image or CSS gradient.
- Responsive variants should be generated from **approved masters**, not from an already compressed thumbnail.

## Responsive art direction
Generate multiple widths of the same composition for `srcset`. For distinct desktop/tablet/mobile framing, use explicitly approved crop focal points or separate approved masters; never auto-crop away the athlete's skate/hand. Review all variants at final display size.

## Motion assets
If line is animated in Canvas/SVG, master image must not contain that line. Keep subject/background/animation as separate layers. One-shot line draw means no continuous redraw after completion, unless user separately requests persistent sparkling particles.

## Automation
`tools/images/build.py` performs only deterministic transforms and writes a manifest. Run it on approved inputs; inspect generated previews. Image editing tools or external models are separate manual/approved steps.
