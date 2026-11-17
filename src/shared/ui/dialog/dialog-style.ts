import { tv } from 'tailwind-variants';

export const dialogStyles = tv({
  slots: {
    overlay: `
      fixed
      inset-0
      isolate
      z-50

      bg-black/10

      duration-100

      data-closed:animate-out
      data-closed:fade-out-0

      data-open:animate-in
      data-open:fade-in-0

      supports-backdrop-filter:backdrop-blur-xs
    `,
    content: `
      fixed
      top-1/2
      left-1/2
      z-50
      -translate-x-1/2
      -translate-y-1/2

      grid

      w-full
      max-w-[calc(100%-2rem)]

      gap-4
      p-4

      text-sm

      bg-popover
      text-popover-foreground

      rounded-xl
      ring-1
      ring-foreground/10
      outline-none

      duration-100

      data-closed:animate-out
      data-closed:fade-out-0
      data-closed:zoom-out-95

      data-open:animate-in
      data-open:fade-in-0
      data-open:zoom-in-95

      sm:max-w-sm
    `,
    closeButton: `
      absolute
      top-2
      right-2
    `,
    closeLabel: `
      sr-only
    `,
    header: `
      flex
      flex-col

      gap-2
    `,
    footer: `
      flex
      flex-col-reverse

      -mx-4
      -mb-4
      gap-2
      p-4

      bg-muted/50

      rounded-b-xl
      border-t

      sm:flex-row
      sm:justify-end
    `,
    title: `
      cn-font-heading
      text-base
      leading-none
      font-medium
    `,
    description: `
      text-sm

      text-muted-foreground

      *:[a]:underline
      *:[a]:underline-offset-3
      *:[a]:hover:text-foreground
    `,
  },
});
