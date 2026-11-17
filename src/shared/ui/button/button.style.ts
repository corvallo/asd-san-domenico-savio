import { tv } from 'tailwind-variants';

export const buttonVariants = tv({
  base: `
    group/button
    inline-flex
    shrink-0
    items-center
    justify-center
    cursor-pointer

    text-sm
    font-medium
    whitespace-nowrap

    bg-clip-padding

    rounded-full
    border-[1.5px]
    border-transparent
    outline-none

    transition-all
    select-none

    focus-visible:border-ring
    focus-visible:ring-3
    focus-visible:ring-ring/50

    active:not-aria-[haspopup]:translate-y-px

    disabled:pointer-events-none
    disabled:opacity-50

    aria-invalid:border-destructive
    aria-invalid:ring-3
    aria-invalid:ring-destructive/20

    dark:aria-invalid:border-destructive/50
    dark:aria-invalid:ring-destructive/40

    [&_svg]:pointer-events-none
    [&_svg]:shrink-0
    [&_svg:not([class*='size-'])]:size-4
  `,
  variants: {
    variant: {
      default: `
        bg-primary
        text-primary-foreground

        hover:bg-primary/80
      `,
      outline: `
        bg-background

        border-input

        hover:bg-muted
        hover:text-foreground

        aria-expanded:bg-muted
        aria-expanded:text-foreground

        dark:border-input
        dark:bg-input/30

        dark:hover:bg-input/50
      `,
      secondary: `
        bg-secondary
        text-secondary-foreground

        hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)]

        aria-expanded:bg-secondary
        aria-expanded:text-secondary-foreground
      `,
      ghost: `
        hover:bg-accent
        hover:text-accent-foreground
        bg-transparent
        aria-expanded:bg-muted
        aria-expanded:text-foreground

        dark:hover:bg-muted/50
      `,
      destructive: `
        bg-destructive/10
        text-destructive

        hover:bg-destructive/20

        focus-visible:border-destructive/40
        focus-visible:ring-destructive/20

        dark:bg-destructive/20

        dark:hover:bg-destructive/30

        dark:focus-visible:ring-destructive/40
      `,
      'gold-outline': `
        bg-transparent
        text-gold-text

        border-2
        border-gold-text

        hover:bg-accent
      `,
      link: `
        text-gold-text

        underline-offset-4

        hover:underline
      `,
    },
    size: {
      default: `
        h-8

        gap-1.5
        px-2.5

        has-data-[icon=inline-end]:pr-2
        has-data-[icon=inline-start]:pl-2
      `,
      xs: `
        h-6

        gap-1
        px-2

        text-xs

        has-data-[icon=inline-end]:pr-1.5
        has-data-[icon=inline-start]:pl-1.5

        [&_svg:not([class*='size-'])]:size-3
      `,
      sm: `
        h-7

        gap-1
        px-2.5

        text-[0.8rem]

        has-data-[icon=inline-end]:pr-1.5
        has-data-[icon=inline-start]:pl-1.5

        [&_svg:not([class*='size-'])]:size-3.5
      `,
      lg: `
        h-9

        gap-1.5
        px-2.5

        has-data-[icon=inline-end]:pr-2
        has-data-[icon=inline-start]:pl-2
      `,
      hero: `
        h-auto

        gap-2
        px-9
        py-4

        text-[17px]
        font-semibold
      `,
      cta: `
        h-auto

        gap-2
        px-[26px]
        py-[11px]

        text-[15px]
        font-semibold
      `,
      icon: `
        size-8
      `,
      'icon-xs': `
        size-6

        [&_svg:not([class*='size-'])]:size-3
      `,
      'icon-sm': `
        size-7
      `,
      'icon-lg': `
        size-9
      `,
    },
  },
  compoundVariants: [
    {
      variant: 'gold-outline',
      size: 'hero',
      class: `
        px-[34px]
        py-[14px]
      `,
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});
