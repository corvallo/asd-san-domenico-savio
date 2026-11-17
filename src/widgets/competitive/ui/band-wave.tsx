import { tv } from 'tailwind-variants';

const bandWaveStyles = tv({
  base: `
    -mb-px
    block

    h-24
    w-full

    fill-band
  `,
});

/** Wave rising into the night-blue band. */
export const BandWave = () => (
  <svg viewBox='0 0 1440 120' preserveAspectRatio='none' aria-hidden='true' className={bandWaveStyles()}>
    <path d='M0 120V70C240 0 480 0 720 60S1200 120 1440 30V120Z' />
  </svg>
);
