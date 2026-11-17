import type { ClubEvent } from '~/entities/event';
import { PhotoPlaceholder } from '~/shared/ui';
import { eventListItemStyles } from './event-list-item.style';

/** Event row: photo on the left, date, title, place and description on the right. */
export const EventListItem = ({ date, title, place, description }: ClubEvent) => {
  const styles = eventListItemStyles();

  return (
    <li className={styles.root()}>
      <PhotoPlaceholder shape='soft' className={styles.photo()} />
      <div className={styles.body()}>
        <span className={styles.date()}>{date}</span>
        <h3 className={styles.title()}>{title}</h3>
        <p className={styles.place()}>{place}</p>
        <p className={styles.description()}>{description}</p>
      </div>
    </li>
  );
};
