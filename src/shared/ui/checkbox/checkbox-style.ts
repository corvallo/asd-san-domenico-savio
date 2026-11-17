import { tv } from 'tailwind-variants';

export const checkboxStyles = tv({
  slots: {
    root: `
      relative

      peer
      flex
      shrink-0
      items-center
      justify-center

      size-4

      rounded-[4px]
      border
      border-input
      outline-none

      transition-colors

      after:absolute
      after:-inset-x-3
      after:-inset-y-2

      aria-invalid:border-destructive
      aria-invalid:ring-3
      aria-invalid:ring-destructive/20
      aria-invalid:aria-checked:border-primary

      dark:bg-input/30
      dark:aria-invalid:border-destructive/50
      dark:aria-invalid:ring-destructive/40
      dark:data-checked:bg-primary

      data-checked:border-primary
      data-checked:bg-primary
      data-checked:text-primary-foreground

      disabled:cursor-not-allowed
      disabled:opacity-50

      focus-visible:border-ring
      focus-visible:ring-3
      focus-visible:ring-ring/50

      group-has-[:focus-visible]/field-label:ring-0
      group-has-[:focus-visible]/field-label:not-data-checked:border-input
      group-has-[:focus-visible]/field-label:data-checked:border-primary

      group-has-disabled/field:opacity-50
    `,
    indicator: `
      grid
      place-content-center

      text-current

      transition-none

      [&>svg]:size-3.5
    `,
  },
});
