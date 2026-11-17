import { tv } from 'tailwind-variants';
import { PhotoPlaceholder } from '~/shared/ui';
import type { Moment } from '../model/types';

const momentItemStyles = tv({
  slots: {
    root: `
      flex-[0_0_min(420px,80%)]
      min-w-0
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

export const MomentItem = ({ label, shape }: Moment) => {
  const styles = momentItemStyles();

  return (
    <li className={styles.root()}>
      <PhotoPlaceholder shape={shape} label={label} className={styles.photo()}></PhotoPlaceholder>
    </li>
  );
};
