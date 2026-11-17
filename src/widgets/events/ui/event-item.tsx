import { tv } from 'tailwind-variants';
import type { ClubEvent } from '~/entities/event';

const eventItemStyles = tv({
  slots: {
    link: `
      flex
      flex-wrap
      items-center

      gap-7
      py-4
      pr-10
      pl-4

      bg-card

      rounded-3xl
      border

      transition-opacity

      hover:opacity-70

      md:rounded-full
    `,
    date: `
      px-6
      py-[18px]

      font-semibold

      bg-gold
      text-gold-foreground

      rounded-full
    `,
    title: `
      flex-1

      text-xl
      font-medium
    `,
    place: `
      text-muted-foreground
    `,
  },
});

export const EventItem = ({ date, title, place, href }: ClubEvent) => {
  const styles = eventItemStyles();

  return (
    <li>
      <a href={href} className={styles.link()}>
        <span className={styles.date()}>{date}</span>
        <span className={styles.title()}>{title}</span>
        <span className={styles.place()}>{place}</span>
      </a>
    </li>
  );
};
