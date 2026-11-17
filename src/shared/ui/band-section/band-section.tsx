import type { ComponentProps } from 'react';
import { tv } from 'tailwind-variants';

const bandSectionStyles = tv({
  slots: {
    /** `band-invert` swaps the band to white/navy in dark mode (see shadcn.css). */
    root: `
      band-invert
    `,
    wave: `
      -mb-px
      block

      h-24
      w-full

      fill-band
    `,
    band: `
      pt-14
      pb-28

      bg-band
      text-band-foreground
    `,
  },
});

/** Section on the night-blue band with a wave rising into it; inverted in dark mode. */
export const BandSection = ({ className, children, ...props }: ComponentProps<'section'>) => {
  const styles = bandSectionStyles();

  return (
    <section {...props} className={styles.root({ className })}>
      <svg viewBox='0 0 1440 120' preserveAspectRatio='none' aria-hidden='true' className={styles.wave()}>
        <path d='M0 120V70C240 0 480 0 720 60S1200 120 1440 30V120Z' />
      </svg>
      <div className={styles.band()}>{children}</div>
    </section>
  );
};
