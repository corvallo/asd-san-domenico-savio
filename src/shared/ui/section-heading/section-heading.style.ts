import { tv } from 'tailwind-variants';

export const sectionHeadingStyles = tv({
  slots: {
    root: `
      flex
      flex-col
    `,
    kicker: `
      kicker

      mt-0
      mb-3
    `,
    title: `
      m-0

      text-4xl
      leading-none

      md:text-[52px]
    `,
    intro: `
      mt-4
      mb-0
      max-w-[480px]

      text-muted-foreground
    `,
  },
  variants: {
    size: {
      default: {},
      lg: {
        title: `
          md:text-[56px]
        `,
      },
    },
    tone: {
      default: {},
      band: {
        kicker: `
          text-band-accent
        `,
        intro: `
          mt-5

          text-[#C9D2E6]
        `,
      },
    },
    align: {
      start: {},
      center: {
        root: `
          items-center

          text-center
        `,
        intro: `
          mx-auto

          text-[19px]
        `,
      },
    },
  },
  defaultVariants: {
    size: 'default',
    tone: 'default',
    align: 'start',
  },
});
