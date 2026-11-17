import { tv } from 'tailwind-variants';
import { Carousel, Container } from '~/shared/ui';
import type { Moment } from '../model/types';
import { MomentItem } from './moment-item';

const momentsStyles = tv({
  slots: {
    root: `
      pb-24
    `,
    title: `
      m-0

      text-4xl

      md:text-[52px]
    `,
  },
});

type MomentsProps = { title: string; items: Moment[] };

export const Moments = ({ title, items }: MomentsProps) => {
  const styles = momentsStyles();

  return (
    <Container as='section' id='galleria' aria-labelledby='moments-title' className={styles.root()}>
      <Carousel
        label={title}
        header={
          <h2 id='moments-title' className={styles.title()}>
            {title}
          </h2>
        }
      >
        {items.map((item) => (
          <MomentItem key={item.id} {...item} />
        ))}
      </Carousel>
    </Container>
  );
};
