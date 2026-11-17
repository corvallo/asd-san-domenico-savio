import { tv } from 'tailwind-variants';

export const heroStyles = tv({
  slots: {
    root: `
      grid
      grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))]
      items-center

      gap-12
      pt-10
      pb-24
    `,
    kicker: `
      kicker

      mt-0
      mb-4
    `,
    title: `
      m-0

      text-6xl
      leading-[0.95]

      md:text-[84px]
    `,
    accent: `
      font-medium
      text-gold-text
    `,
    lead: `
      mt-7
      mb-9
      max-w-[460px]

      text-[19px]
      text-muted-foreground
    `,
    actions: `
      flex
      flex-wrap

      gap-4
    `,
  },
});
