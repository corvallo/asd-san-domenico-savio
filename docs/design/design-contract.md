# Visual fidelity contract

## Hierarchy of truth
1. User-approved screenshot or supplied design asset
2. Existing approved components/tokens
3. Explicit written requirements
4. Minimal neutral fallback only where unspecified

## Do not generate stereotypical AI design
No gratuitous gradients, floating cards, glassmorphism, excessive rounded corners, generic gradients, stock illustrations, random glows, invented hero copy, emojis-as-icons, unnecessary shadows or animations. A gradient is allowed when the reference explicitly contains it. Do not redesign the screenshot.

## Before styling
Extract and record only task-relevant visual facts: grid, alignment, typography, sizes, spacing, colors, image framing, responsive crops, motion. If a value cannot be determined, preserve the existing design or ask rather than invent.

## Acceptance
- Desktop and mobile compositions match the approved reference.
- Typography and hierarchy remain faithful; no copy changes.
- Image subject remains correctly framed at breakpoints.
- No visual regression in unrelated sections.
- Accessibility: semantic markup, focus, contrast, reduced motion.

For hero work, treat the skater, navy background and gold trail as separately controllable layers only when the approved implementation requires it. Static imagery is not a substitute for an explicitly requested HTML/Canvas animation preview.
