import { tv } from 'tailwind-variants';
import { PhotoCaption, PhotoPlaceholder } from '~/shared/ui';
import type { Moment } from '../model/types';

const momentItemStyles = tv({
  slots: {
    root: `
      flex-[0_0_min(420px,80%)]
      snap-start

      list-none
    `,
    photo: `
      h-[420px]
    `,
    caption: `
      bottom-7
      left-7
    `,
  },
});

export const MomentItem = ({ label, caption, shape }: Moment) => {
  const styles = momentItemStyles();

  return (
    <li className={styles.root()}>
      <PhotoPlaceholder shape={shape} label={label} className={styles.photo()}>
        <PhotoCaption className={styles.caption()}>{caption}</PhotoCaption>
      </PhotoPlaceholder>
    </li>
  );
};
