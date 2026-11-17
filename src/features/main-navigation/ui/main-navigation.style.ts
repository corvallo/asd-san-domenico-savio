import { tv } from 'tailwind-variants';

export const navigationStyle = tv({
  base: `
    hidden

    lg:flex
  `,
});

export const navigationListStyle = tv({
  base: `
    gap-7
  `,
});

export const navigationLinkStyle = tv({
  base: `
    p-0
    pb-1

    text-[17px]
    font-medium
    text-foreground

    rounded-none
    border-b-2
    border-transparent

    transition-opacity

    hover:bg-transparent
    hover:opacity-70
    focus:bg-transparent
  `,
  variants: {
    active: {
      true: `
        text-gold-text

        border-gold-text
      `,
    },
  },
});
