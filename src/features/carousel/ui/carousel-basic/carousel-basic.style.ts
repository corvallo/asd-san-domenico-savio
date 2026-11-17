import { tv } from 'tailwind-variants';

export const carouselStyle = tv({
  slots: {
    root: `
      relative

      overflow-hidden

      w-full
      h-[100svh]
      min-h-[600px]

      bg-[#0B2138]
      text-[#FFFFFF]
    `,
    viewport: `
      overflow-hidden

      w-full
      h-full
    `,
    container: `
      flex

      h-full

      [touch-action:pan-y_pinch-zoom]
    `,
  },
});
