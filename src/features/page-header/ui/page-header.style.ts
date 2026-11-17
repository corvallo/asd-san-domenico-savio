import { tv } from 'tailwind-variants';

export const pageHeaderStyle = tv({
  slots: {
    root: `
      relative

      pt-12
      pb-6
    `,
    trail: `
      pointer-events-none
      absolute
      top-0
      right-0

      h-auto
      w-[min(600px,60%)]

      fill-none
      stroke-gold
      stroke-2
    `,
    kicker: `
      kicker

      relative

      mt-0
      mb-3
    `,
    title: `
      relative

      m-0
      mb-4

      text-5xl
      leading-none

      md:text-[72px]
    `,
    subtitle: `
      relative

      m-0
      max-w-[520px]

      text-[19px]
      text-muted-foreground
    `,
  },
});
