import { tv } from 'tailwind-variants';
import type { Reel } from '~/entities/reel';
import { PhotoCaption, PhotoPlaceholder } from '~/shared/ui';
import { ReelPlayBadge } from './reel-play-badge';
import { ReelTrail } from './reel-trail';

const reelCardStyles = tv({
  slots: {
    root: `
      relative
      block
      overflow-hidden

      w-[260px]
      aspect-[9/16]

      bg-wood

      rounded-[28px]

      transition-opacity

      hover:opacity-70

      focus-visible:outline-2
      focus-visible:outline-offset-4
      focus-visible:outline-band-accent
    `,
    cover: `
      absolute
      inset-0

      size-full

      object-cover
    `,
    caption: `
      bottom-5
      left-5
    `,
  },
});

/** 9:16 reel card; the whole card links to the reel on Instagram in a new tab. */
export const ReelCard = ({ title, url, cover }: Reel) => {
  const styles = reelCardStyles();

  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={`Guarda il reel “${title}” su Instagram (si apre in una nuova scheda)`}
      className={styles.root()}
    >
      {cover ? (
        <img src={cover} alt='' loading='lazy' className={styles.cover()} />
      ) : (
        <PhotoPlaceholder label='[COPERTINA REEL]' className={styles.cover({ className: 'rounded-none' })} />
      )}
      <ReelTrail />
      <ReelPlayBadge />
      <PhotoCaption tone='navy' className={styles.caption()}>
        {title}
      </PhotoCaption>
    </a>
  );
};
