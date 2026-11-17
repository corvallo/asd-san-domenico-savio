import { tv } from 'tailwind-variants';
import { PhotoPlaceholder } from '~/shared/ui';
import type { GalleryPhoto } from '../model/types';

const galleryItemStyles = tv({
  slots: {
    root: `
      list-none
    `,
    photo: `
      h-[300px]
    `,
  },
  variants: {
    span: {
      1: {},
      2: { root: 'md:col-span-2' },
    },
    height: {
      sm: {},
      lg: { photo: 'md:h-[380px]' },
    },
  },
});

export const GalleryItem = ({ label, shape, span, height }: GalleryPhoto) => {
  const styles = galleryItemStyles({ span, height });

  return (
    <li className={styles.root()}>
      <PhotoPlaceholder shape={shape} label={label} className={styles.photo()} />
    </li>
  );
};
