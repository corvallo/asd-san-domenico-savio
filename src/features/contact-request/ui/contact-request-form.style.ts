import { tv } from 'tailwind-variants';

export const contactRequestFormStyles = tv({
  slots: {
    root: `
      px-6
      py-10

      bg-card

      rounded-[24px_120px_24px_24px]
      border

      md:px-10
      md:py-12
    `,
    label: `
      mb-[18px]
      block

      font-medium
    `,
    input: `
      mt-1.5
      min-h-12

      px-6
      py-3.5

      bg-card

      border-border
    `,
    submit: `
      px-10
    `,
  },
});
