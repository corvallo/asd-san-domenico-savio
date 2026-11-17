import { tv } from 'tailwind-variants';

export const mobileNavigationStyles = tv({
  slots: {
    trigger: `
      lg:hidden
    `,
    title: `
      font-heading
      text-2xl
      font-bold
    `,
    nav: `
      flex
      flex-col

      gap-2
      px-5
      py-6
    `,
    link: `
      px-4
      py-3

      text-base
      font-medium
      text-foreground

      rounded-full

      transition-colors

      hover:bg-accent
    `,
    cta: `
      mt-5
    `,
  },
  variants: {
    active: {
      true: {
        link: `
          text-gold-text
        `,
      },
    },
  },
});
