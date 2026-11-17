import { tv } from 'tailwind-variants';

const heroTrailStyles = tv({
  base: `
    pointer-events-none
    absolute
    inset-0

    size-full

    fill-none
    stroke-gold
  `,
});

/** Gold skating trail and ellipse drawn over the hero photo. */
export const HeroTrail = () => (
  <svg viewBox='0 0 520 520' aria-hidden='true' className={heroTrailStyles()}>
    <path d='M20 470C120 300 140 160 300 120S500 60 500 20' strokeWidth='3' />
    <path d='M0 500C140 330 170 210 320 170S510 110 520 60' strokeWidth='1.5' />
    <ellipse cx='300' cy='400' rx='190' ry='56' transform='rotate(-18 300 400)' strokeWidth='1.5' />
  </svg>
);
