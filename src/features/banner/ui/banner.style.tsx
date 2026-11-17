import { tv } from 'tailwind-variants';

export const bannerStyle = tv({
  slots: {
    root: `
      grid
      grid-cols-[0.4fr_1fr]
      place-content-center

      h-auto
      w-full

      bg-foreground

      [box-shadow:inset_0_1px_3px_rgb(0_0_0/0.1)]
    `,
    left: `
      relative
    `,
    border: `
      absolute
      inset-0

      overflow-visible

      w-full
      h-full

      pointer-events-none
    `,
  },
});
