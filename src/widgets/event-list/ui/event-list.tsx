import { tv } from 'tailwind-variants';
import type { ClubEvent } from '~/entities/event';
import { EventListItem } from './event-list-item';

const eventListStyles = tv({
  base: `
    m-0
    p-0

    list-none

    border-b
  `,
});

export const EventList = ({ events }: { events: ClubEvent[] }) => (
  <ul className={eventListStyles()}>
    {events.map((event) => (
      <EventListItem key={event.id} {...event} />
    ))}
  </ul>
);
