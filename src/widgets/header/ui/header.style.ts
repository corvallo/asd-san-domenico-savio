import { tv } from 'tailwind-variants';

export const headerStyle = tv({
  slots: {
    root: `
      relative
      z-50

      w-full

      bg-background
    `,
    inner: `
      flex
      items-center
      justify-between

      gap-6
      py-7
    `,
  },
});
