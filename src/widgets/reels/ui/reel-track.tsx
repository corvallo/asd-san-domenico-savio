import { tv } from 'tailwind-variants';
import type { Reel } from '~/entities/reel';
import { ReelCard } from './reel-card';

const reelTrackStyles = tv({
  slots: {
    list: `
      flex
      snap-x
      snap-mandatory
      overflow-x-auto

      m-0
      gap-6
      p-0
      pb-5

      list-none
    `,
    item: `
      shrink-0
      snap-start
    `,
  },
});

/** Horizontal native scroll with CSS scroll-snap (no carousel library). */
export const ReelTrack = ({ reels }: { reels: Reel[] }) => {
  const styles = reelTrackStyles();

  return (
    <ul className={styles.list()}>
      {reels.map((reel) => (
        <li key={reel.id} className={styles.item()}>
          <ReelCard {...reel} />
        </li>
      ))}
    </ul>
  );
};
