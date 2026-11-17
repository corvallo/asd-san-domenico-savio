import { tv } from 'tailwind-variants';

const reelTrailStyles = tv({
  base: `
    pointer-events-none
    absolute
    inset-0

    size-full

    fill-none
    stroke-gold-foreground
    opacity-85
  `,
});

/** Thin skating trail crossing the reel cover. */
export const ReelTrail = () => (
  <svg viewBox='0 0 260 462' preserveAspectRatio='none' aria-hidden='true' className={reelTrailStyles()}>
    <path d='M-20 430C70 360 170 390 280 200' strokeWidth='4' />
    <path d='M-20 455C80 385 180 415 280 235' strokeWidth='1.5' />
  </svg>
);
