import { tv } from 'tailwind-variants';
import { Container } from '~/shared/ui';
import type { Moment } from '../model/types';
import { MomentItem } from './moment-item';

const momentsStyles = tv({
  slots: {
    root: `
      pb-24
    `,
    header: `
      flex
      flex-wrap
      items-baseline
      justify-between

      mb-8
      gap-4
    `,
    title: `
      m-0

      text-4xl

      md:text-[52px]
    `,
    hint: `
      font-semibold
      text-gold-text
    `,
    track: `
      flex
      snap-x
      snap-mandatory
      overflow-x-auto

      m-0
      gap-6
      p-0
      pb-5
    `,
  },
});

type MomentsProps = { title: string; hint: string; items: Moment[] };

/** Static horizontal strip (native scroll); Embla carousel deferred. */
export const Moments = ({ title, hint, items }: MomentsProps) => {
  const styles = momentsStyles();

  return (
    <Container as='section' id='galleria' aria-labelledby='moments-title' className={styles.root()}>
      <div className={styles.header()}>
        <h2 id='moments-title' className={styles.title()}>
          {title}
        </h2>
        <span aria-hidden='true' className={styles.hint()}>
          {hint}
        </span>
      </div>
      <ul className={styles.track()}>
        {items.map((item) => (
          <MomentItem key={item.id} {...item} />
        ))}
      </ul>
    </Container>
  );
};
