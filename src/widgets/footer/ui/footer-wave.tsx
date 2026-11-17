import { tv } from 'tailwind-variants';

const footerWaveStyles = tv({
  slots: {
    root: `
      -mb-px
      block

      h-[104px]
      w-full
    `,
    fill: `
      fill-band
    `,
    thread: `
      fill-none
      stroke-gold
    `,
  },
});

/** Night-blue wave with a double gold thread along its edge. */
export const FooterWave = () => {
  const styles = footerWaveStyles();

  return (
    <svg viewBox='0 -12 1440 132' preserveAspectRatio='none' aria-hidden='true' className={styles.root()}>
      <path d='M0 70C240 0 480 0 720 60S1200 120 1440 30V120H0Z' className={styles.fill()} />
      <path
        d='M0 62C240 -8 480 -8 720 52S1200 112 1440 22'
        strokeWidth='1.5'
        opacity='.6'
        vectorEffect='non-scaling-stroke'
        className={styles.thread()}
      />
      <path
        d='M0 70C240 0 480 0 720 60S1200 120 1440 30'
        strokeWidth='3'
        vectorEffect='non-scaling-stroke'
        className={styles.thread()}
      />
    </svg>
  );
};
