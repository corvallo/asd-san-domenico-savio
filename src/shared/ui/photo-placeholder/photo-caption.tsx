import type { PropsWithChildren } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const photoCaptionStyles = tv({
  base: `
    absolute

    py-2

    text-[15px]
    tracking-normal

    rounded-full
  `,
  variants: {
    tone: {
      gold: `
        px-5

        bg-gold
        text-gold-foreground
      `,
      navy: `
        px-[18px]

        bg-gold-foreground
        text-cream
      `,
    },
  },
  defaultVariants: {
    tone: 'gold',
  },
});

type PhotoCaptionProps = PropsWithChildren<VariantProps<typeof photoCaptionStyles> & { className?: string }>;

/** Pill caption laid over a photo; position it with `className`. */
export const PhotoCaption = ({ children, tone, className }: PhotoCaptionProps) => (
  <span className={photoCaptionStyles({ tone, className })}>{children}</span>
);
