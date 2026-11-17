import { tv } from 'tailwind-variants';

export const siteFooterStyles = tv({
  slots: {
    band: `
      pt-4
      pb-10

      bg-band
      text-band-foreground
    `,
    grid: `
      grid
      grid-cols-[repeat(auto-fit,minmax(220px,1fr))]

      gap-10
    `,
  },
});
