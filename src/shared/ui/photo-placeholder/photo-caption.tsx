import type { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

const photoCaptionStyles = tv({
  base: `
    absolute

    px-5
    py-2

    text-[15px]
    tracking-normal

    bg-gold
    text-gold-foreground

    rounded-full
  `,
});

/** Gold pill caption laid over a photo; position it with `className`. */
export const PhotoCaption = ({ children, className }: PropsWithChildren<{ className?: string }>) => (
  <span className={photoCaptionStyles({ className })}>{children}</span>
);
