import { tv } from 'tailwind-variants';
import type { Club } from '~/entities/club';
import { ContactRequestForm } from '~/features/contact-request';
import { PhotoPlaceholder } from '~/shared/ui';
import { ContactInfoItem } from './contact-info-item';

const contactStyles = tv({
  slots: {
    root: `
      grid
      grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))]

      gap-14
    `,
    list: `
      m-0
      p-0
    `,
    map: `
      h-[200px]
    `,
  },
});

export const Contact = ({ club, submitLabel }: { club: Club; submitLabel: string }) => {
  const styles = contactStyles();

  return (
    <div className={styles.root()}>
      <div>
        <dl className={styles.list()}>
          <ContactInfoItem label='Indirizzo' value={club.address} />
          <ContactInfoItem label='Telefono' value={club.phone} href={`tel:${club.phone}`} />
          <ContactInfoItem label='Email' value={club.email} href={`mailto:${club.email}`} />
          <ContactInfoItem label='Segreteria' value={club.officeHours} />
        </dl>
        <PhotoPlaceholder shape='leaf-wide' label='[MAPPA]' className={styles.map()} />
      </div>
      <ContactRequestForm submitLabel={submitLabel} />
    </div>
  );
};
