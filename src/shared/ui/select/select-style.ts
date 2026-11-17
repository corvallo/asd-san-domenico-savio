import { tv } from 'tailwind-variants';

export const selectStyles = tv({
  slots: {
    group: `
      scroll-my-1
      p-1
    `,
    value: `
      flex
      flex-1

      text-left
    `,
    trigger: `
      flex
      items-center
      justify-between

      w-fit

      gap-1.5
      py-2
      pr-2
      pl-2.5

      text-sm
      whitespace-nowrap

      bg-transparent

      rounded-full
      border-[1.5px]
      border-input
      outline-none

      transition-colors
      select-none

      *:data-[slot=select-value]:line-clamp-1
      *:data-[slot=select-value]:flex
      *:data-[slot=select-value]:items-center
      *:data-[slot=select-value]:gap-1.5

      [&_svg:not([class*='size-'])]:size-4

      [&_svg]:pointer-events-none
      [&_svg]:shrink-0

      aria-invalid:border-destructive
      aria-invalid:ring-3
      aria-invalid:ring-destructive/20

      dark:bg-input/30
      dark:hover:bg-input/50
      dark:aria-invalid:border-destructive/50
      dark:aria-invalid:ring-destructive/40

      data-[size=default]:h-8

      data-[size=sm]:h-7
      data-[size=sm]:rounded-[min(var(--radius-md),10px)]

      data-placeholder:text-muted-foreground

      disabled:cursor-not-allowed
      disabled:opacity-50

      focus-visible:border-ring
      focus-visible:ring-3
      focus-visible:ring-ring/50
    `,
    triggerIcon: `
      size-4

      text-muted-foreground

      pointer-events-none
    `,
    content: `
      relative
      isolate
      z-50

      overflow-x-hidden
      overflow-y-auto

      max-h-(--available-height)
      w-(--anchor-width)
      min-w-36

      bg-popover
      text-popover-foreground

      rounded-lg
      ring-1
      ring-foreground/10

      origin-(--transform-origin)
      shadow-md
      duration-100

      data-[align-trigger=true]:animate-none

      data-[side=bottom]:slide-in-from-top-2

      data-[side=inline-end]:slide-in-from-left-2

      data-[side=inline-start]:slide-in-from-right-2

      data-[side=left]:slide-in-from-right-2

      data-[side=right]:slide-in-from-left-2

      data-[side=top]:slide-in-from-bottom-2

      data-closed:animate-out
      data-closed:fade-out-0
      data-closed:zoom-out-95

      data-open:animate-in
      data-open:fade-in-0
      data-open:zoom-in-95
    `,
    positioner: `
      isolate
      z-50
    `,
    label: `
      px-1.5
      py-1

      text-xs

      text-muted-foreground
    `,
    item: `
      relative

      flex
      items-center

      w-full

      gap-1.5
      py-1
      pr-8
      pl-1.5

      text-sm

      rounded-md
      outline-hidden

      cursor-default
      select-none

      *:[span]:last:flex
      *:[span]:last:items-center
      *:[span]:last:gap-2

      [&_svg:not([class*='size-'])]:size-4

      [&_svg]:pointer-events-none
      [&_svg]:shrink-0

      data-disabled:pointer-events-none
      data-disabled:opacity-50

      focus:bg-accent
      focus:text-accent-foreground

      not-data-[variant=destructive]:focus:**:text-accent-foreground
    `,
    itemText: `
      flex
      flex-1
      shrink-0

      gap-2

      whitespace-nowrap
    `,
    itemIndicator: `
      absolute
      right-2

      flex
      items-center
      justify-center

      size-4

      pointer-events-none
    `,
    itemIcon: `
      pointer-events-none
    `,
    separator: `
      h-px

      -mx-1
      my-1

      bg-border

      pointer-events-none
    `,
    scrollUpButton: `
      top-0
      z-10

      flex
      items-center
      justify-center

      w-full

      py-1

      bg-popover

      cursor-default

      [&_svg:not([class*='size-'])]:size-4
    `,
    scrollDownButton: `
      bottom-0
      z-10

      flex
      items-center
      justify-center

      w-full

      py-1

      bg-popover

      cursor-default

      [&_svg:not([class*='size-'])]:size-4
    `,
  },
});
