import { tv } from 'tailwind-variants';
import { SectionHeading } from '~/shared/ui';

const reelsHeaderStyles = tv({
  slots: {
    root: `
      flex
      flex-wrap
      items-end
      justify-between

      mb-9
      gap-4
    `,
    hint: `
      font-semibold
      text-band-accent
    `,
  },
});

type ReelsHeaderProps = { id: string; kicker: string; title: string; hint: string };

export const ReelsHeader = ({ id, kicker, title, hint }: ReelsHeaderProps) => {
  const styles = reelsHeaderStyles();

  return (
    <div className={styles.root()}>
      <SectionHeading id={id} tone='band' kicker={kicker} title={title} />
      <span aria-hidden='true' className={styles.hint()}>
        {hint}
      </span>
    </div>
  );
};
