import { tv } from 'tailwind-variants';
import type { ClubEvent } from '~/entities/event';
import { Container, SectionHeading } from '~/shared/ui';
import { EventItem } from './event-item';

const eventsStyles = tv({
  slots: {
    root: `
      pt-28
      pb-28
    `,
    heading: `
      mb-10
    `,
    list: `
      flex
      flex-col

      m-0
      gap-4
      p-0

      list-none
    `,
  },
});

type EventsProps = { title: string; items: ClubEvent[] };

export const Events = ({ title, items }: EventsProps) => {
  const styles = eventsStyles();

  return (
    <Container as='section' id='eventi' aria-labelledby='events-title' className={styles.root()}>
      <SectionHeading id='events-title' title={title} className={styles.heading()} />
      <ul className={styles.list()}>
        {items.map((item) => (
          <EventItem key={item.id} {...item} />
        ))}
      </ul>
    </Container>
  );
};
