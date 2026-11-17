import { tv } from 'tailwind-variants';

export const portraitStyles = tv({
  slots: {
    root: `
      text-center
    `,
    frame: `
      relative

      mx-auto
      mb-6
      size-44
    `,
    ring: `
      absolute
      -top-3
      -right-3
      bottom-3
      left-3

      rounded-full
      border-2
      border-gold
    `,
    photo: `
      absolute
      inset-0
    `,
    image: `
      overflow-hidden

      rounded-full
      bg-wood
    `,
    img: `
      size-full

      object-cover
      object-top
    `,
    body: ``,
    title: `
      m-0

      text-2xl
    `,
    subtitle: `
      mt-0.5
      mb-0

      font-medium
      text-gold-text
    `,
    description: `
      mt-3
      mb-0
      max-w-[60ch]

      text-muted-foreground
    `,
  },
  variants: {
    layout: {
      stacked: {
        root: `
          sm:even:mt-11
        `,
      },
      row: {
        root: `
          flex
          flex-col
          items-center

          gap-8

          sm:flex-row
          sm:items-center
          sm:text-left
        `,
        frame: `
          mb-0
          shrink-0

          sm:mx-0
        `,
        title: `
          text-[32px]
        `,
      },
    },
  },
  defaultVariants: {
    layout: 'stacked',
  },
});
