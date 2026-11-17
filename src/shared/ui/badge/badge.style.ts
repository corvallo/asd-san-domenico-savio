import { tv } from 'tailwind-variants';

export const badgeVariants = tv({
  base: `
    group/badge
    inline-flex
    shrink-0
    items-center
    justify-center
    overflow-hidden

    w-fit

    font-medium
    whitespace-nowrap

    rounded-full
    border
    border-transparent

    transition-all

    focus-visible:border-ring
    focus-visible:ring-[3px]
    focus-visible:ring-ring/50
    has-data-[icon=inline-end]:pr-1.5
    has-data-[icon=inline-start]:pl-1.5
    aria-invalid:border-destructive
    aria-invalid:ring-destructive/20
    dark:aria-invalid:ring-destructive/40
    [&>svg]:pointer-events-none
    [&>svg]:size-3!
  `,
  variants: {
    variant: {
      default: `
        bg-primary
        text-primary-foreground

        [a]:hover:bg-primary/80
      `,
      secondary: `
        bg-secondary
        text-secondary-foreground

        [a]:hover:bg-secondary/80
      `,
      destructive: `
        bg-destructive/10
        text-destructive

        focus-visible:ring-destructive/20
        dark:bg-destructive/20
        dark:focus-visible:ring-destructive/40
        [a]:hover:bg-destructive/20
      `,
      outline: `
        text-foreground

        border-border

        [a]:hover:bg-muted
        [a]:hover:text-muted-foreground
      `,
      ghost: `
        hover:bg-muted
        hover:text-muted-foreground
        dark:hover:bg-muted/50
      `,
      'gold-outline': `
        bg-transparent
        text-gold-text

        border-gold-text
      `,
      'band-outline': `
        bg-transparent
        text-[#F5CF6B]

        border-[#F5CF6B]
      `,
      link: `
        underline-offset-4

        text-primary

        hover:underline
      `,
    },
    size: {
      default: `
        h-5

        gap-1
        px-2
        py-0.5

        text-xs
      `,
      pill: `
        px-[22px]
        py-2

        text-[17px]
        font-normal

        border-[1.5px]
      `,
      chip: `
        gap-1.5
        px-3.5
        py-1

        text-[13px]
        font-semibold

        border-[1.5px]
      `,
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});
