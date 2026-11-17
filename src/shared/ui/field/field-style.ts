import { tv } from 'tailwind-variants';

export const fieldVariants = tv({
  base: `
    group/field
    flex

    w-full

    gap-2

    data-[invalid=true]:text-destructive
  `,
  variants: {
    orientation: {
      vertical: `
        flex-col

        *:w-full

        [&>.sr-only]:w-auto
      `,
      horizontal: `
        flex-row
        items-center

        *:data-[slot=field-label]:flex-auto

        has-[>[data-slot=field-content]]:items-start
        has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px
      `,
      responsive: `
        flex-col

        *:w-full

        @md/field-group:flex-row
        @md/field-group:items-center
        @md/field-group:*:w-auto
        @md/field-group:has-[>[data-slot=field-content]]:items-start
        @md/field-group:*:data-[slot=field-label]:flex-auto
        @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px

        [&>.sr-only]:w-auto
      `,
    },
  },
  defaultVariants: { orientation: 'vertical' },
});

export const fieldStyles = tv({
  slots: {
    set: `
      flex
      flex-col

      gap-4

      has-[>[data-slot=checkbox-group]]:gap-3

      has-[>[data-slot=radio-group]]:gap-3
    `,
    legend: `
      mb-1.5

      font-medium

      data-[variant=label]:text-sm

      data-[variant=legend]:text-base
    `,
    group: `
      group/field-group
      @container/field-group
      flex
      flex-col

      w-full

      gap-5

      *:data-[slot=field-group]:gap-4

      data-[slot=checkbox-group]:gap-3
    `,
    content: `
      group/field-content
      flex
      flex-1
      flex-col

      gap-0.5

      leading-snug
    `,
    label: `
      group/field-label
      peer/field-label
      flex

      w-fit

      gap-2

      leading-snug

      *:data-[slot=field]:p-2.5

      dark:has-data-checked:border-primary/20
      dark:has-data-checked:bg-primary/10

      group-data-[disabled=true]/field:opacity-50

      has-[>[data-slot=field]]:rounded-lg
      has-[>[data-slot=field]]:border
      has-[>[data-slot=field]]:not-has-[:disabled,[data-disabled]]:hover:bg-muted/50
      has-[>[data-slot=field]]:has-[:focus-visible]:border-ring
      has-[>[data-slot=field]]:has-[:focus-visible]:ring-3
      has-[>[data-slot=field]]:has-[:focus-visible]:ring-ring/50
      has-[>[data-slot=field]]:w-full
      has-[>[data-slot=field]]:flex-col

      has-data-checked:border-primary/30
      has-data-checked:bg-primary/5
    `,
    title: `
      flex
      items-center

      w-fit

      gap-2

      text-sm
      font-medium

      group-data-[disabled=true]/field:opacity-50
    `,
    description: `
      text-left
      text-sm
      leading-normal
      font-normal

      text-muted-foreground

      [&>a:hover]:text-primary

      [&>a]:underline
      [&>a]:underline-offset-4

      [[data-variant=legend]+&]:-mt-1.5

      group-has-data-horizontal/field:text-balance

      last:mt-0

      nth-last-2:-mt-1
    `,
    separator: `
      relative

      h-5

      -my-2

      text-sm

      group-data-[variant=outline]/field-group:-mb-2
    `,
    separatorLine: `
      absolute
      inset-0
      top-1/2

      h-px

      m-0

      bg-border

      border-0
    `,
    separatorContent: `
      relative

      block

      w-fit

      mx-auto
      px-2

      bg-background
      text-muted-foreground
    `,
    error: `
      text-sm
      font-normal

      text-destructive
    `,
    errorList: `
      flex
      flex-col

      ml-4
      gap-1

      list-disc
    `,
  },
});
