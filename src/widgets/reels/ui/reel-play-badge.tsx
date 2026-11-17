import { tv } from 'tailwind-variants';

const reelPlayBadgeStyles = tv({
  slots: {
    root: `
      absolute
      top-1/2
      left-1/2
      flex
      items-center
      justify-center

      size-[72px]
      -translate-x-1/2
      -translate-y-1/2

      bg-gold-foreground

      rounded-full
    `,
    icon: `
      size-[26px]

      fill-gold
    `,
  },
});

/** Decorative round play button; the card link carries the accessible name. */
export const ReelPlayBadge = () => {
  const styles = reelPlayBadgeStyles();

  return (
    <span aria-hidden='true' className={styles.root()}>
      <svg viewBox='0 0 24 24' className={styles.icon()}>
        <path d='M8 5v14l11-7z' />
      </svg>
    </span>
  );
};
