import { tv } from 'tailwind-variants';
import { PhotoCaption, PhotoPlaceholder } from '~/shared/ui';
import { HeroTrail } from './hero-trail';

const heroMediaStyles = tv({
  slots: {
    root: `
      relative
      justify-self-center

      h-[360px]
      w-full
      max-w-[520px]

      md:h-[520px]
    `,
    photo: `
      absolute
      inset-[0_0_0_40px]
    `,
    caption: `
      bottom-[72px]
      left-11
    `,
  },
});

type HeroMediaProps = { label: string; caption: string };

/** Single placeholder photo in the organic blob mask; slideshow deferred. */
export const HeroMedia = ({ label, caption }: HeroMediaProps) => {
  const styles = heroMediaStyles();

  return (
    <div className={styles.root()}>
      <PhotoPlaceholder shape='blob' label={label} className={styles.photo()}>
        <PhotoCaption className={styles.caption()}>{caption}</PhotoCaption>
      </PhotoPlaceholder>
      <HeroTrail />
    </div>
  );
};
