import { tv } from 'tailwind-variants';

const contactInfoItemStyles = tv({
  slots: {
    root: `
      mb-6
    `,
    label: `
      text-[13px]
      font-semibold
      tracking-[0.15em]
      text-gold-text
      uppercase
    `,
    value: `
      m-0

      text-xl
    `,
  },
});

type ContactInfoItemProps = { label: string; value: string; href?: string };

export const ContactInfoItem = ({ label, value, href }: ContactInfoItemProps) => {
  const styles = contactInfoItemStyles();

  return (
    <div className={styles.root()}>
      <dt className={styles.label()}>{label}</dt>
      <dd className={styles.value()}>{href ? <a href={href}>{value}</a> : value}</dd>
    </div>
  );
};
