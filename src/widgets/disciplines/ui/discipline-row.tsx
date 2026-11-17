import { ArrowRight } from 'lucide-react';
import { tv } from 'tailwind-variants';
import type { Discipline } from '~/entities/discipline';

const disciplineRowStyles = tv({
  slots: {
    link: `
      flex
      flex-wrap
      items-center

      gap-8
      py-8

      border-t

      transition-opacity

      hover:opacity-70
    `,
    number: `
      w-24

      font-heading
      text-[56px]
      leading-none
      font-bold
      text-gold-text
    `,
    title: `
      m-0
      min-w-[220px]
      flex-1

      font-heading
      text-[40px]
      leading-tight
      font-bold
    `,
    description: `
      m-0
      min-w-[240px]
      flex-[1.3]

      text-muted-foreground
    `,
    arrow: `
      flex
      items-center
      justify-center

      size-14

      text-gold-text

      rounded-full
      border-2
      border-gold-text
    `,
  },
});

export const DisciplineRow = ({ number, title, description, href }: Discipline) => {
  const styles = disciplineRowStyles();

  return (
    <li>
      <a href={href} className={styles.link()}>
        <span aria-hidden='true' className={styles.number()}>
          {number}
        </span>
        <h3 className={styles.title()}>{title}</h3>
        <p className={styles.description()}>{description}</p>
        <span aria-hidden='true' className={styles.arrow()}>
          <ArrowRight size={22} />
        </span>
      </a>
    </li>
  );
};
