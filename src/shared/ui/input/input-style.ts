import { tv } from 'tailwind-variants';

export const inputStyles = tv({
  base: `
    w-full
    min-w-0

    px-[22px]
    py-3

    text-base

    bg-background

    rounded-full
    border-[1.5px]
    border-input
    transition-colors
    outline-none

    aria-invalid:border-destructive
    aria-invalid:ring-3
    aria-invalid:ring-destructive/20

    dark:disabled:bg-input/80
    dark:aria-invalid:border-destructive/50
    dark:aria-invalid:ring-destructive/40

    disabled:pointer-events-none
    disabled:cursor-not-allowed
    disabled:bg-input/50
    disabled:opacity-50

    file:inline-flex
    file:h-6
    file:border-0
    file:bg-transparent
    file:text-sm
    file:font-medium
    file:text-foreground

    focus-visible:border-ring
    focus-visible:ring-3
    focus-visible:ring-ring/50

    placeholder:text-muted-foreground
  `,
});
