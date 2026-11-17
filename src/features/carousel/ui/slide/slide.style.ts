import { tv } from 'tailwind-variants';

export const slideStyle = tv({
  slots: {
    slideContainer: `
      relative

      [flex:0_0_100%]
      overflow-hidden

      min-w-0
      h-full
    `,
    imageWrapper: `
      absolute
      inset-0

      overflow-hidden
    `,
    image: `
      block
      object-cover
      object-center

      w-full
      h-full
    `,
  },
});
