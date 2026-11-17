import { tv } from 'tailwind-variants';

export const textareaStyles = tv({
  base: `
    flex

    field-sizing-content
    min-h-16
    w-full

    px-[22px]
    py-3

    text-base

    bg-background

    rounded-2xl
    border-[1.5px]
    border-input
    outline-none

    transition-colors

    aria-invalid:border-destructive
    aria-invalid:ring-3
    aria-invalid:ring-destructive/20

    dark:disabled:bg-input/80
    dark:aria-invalid:border-destructive/50
    dark:aria-invalid:ring-destructive/40

    disabled:cursor-not-allowed
    disabled:bg-input/50
    disabled:opacity-50

    focus-visible:border-ring
    focus-visible:ring-3
    focus-visible:ring-ring/50

    placeholder:text-muted-foreground
  `,
});
