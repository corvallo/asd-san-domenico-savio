import { tv, type VariantProps } from 'tailwind-variants';

const brandMarkStyles = tv({
  base: `
    shrink-0

    fill-none
    stroke-2
  `,
  variants: {
    tone: {
      default: `
        stroke-gold-text
      `,
      band: `
        stroke-[#F5CF6B]
      `,
    },
  },
  defaultVariants: {
    tone: 'default',
  },
});

type BrandMarkProps = VariantProps<typeof brandMarkStyles> & { size?: number };

/** Two crossed ellipses: the skating-trace mark used in header and footer. */
export const BrandMark = ({ tone, size = 44 }: BrandMarkProps) => (
  <svg width={size} height={size} viewBox='0 0 44 44' aria-hidden='true' className={brandMarkStyles({ tone })}>
    <ellipse cx='22' cy='22' rx='19' ry='9' transform='rotate(-30 22 22)' />
    <ellipse cx='22' cy='22' rx='19' ry='9' transform='rotate(30 22 22)' />
  </svg>
);
