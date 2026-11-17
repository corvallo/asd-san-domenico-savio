import { tv } from 'tailwind-variants';
import type { Course } from '~/entities/course';
import { Badge } from '~/shared/ui';

const courseRowStyles = tv({
  slots: {
    root: `
      flex
      flex-wrap
      items-center

      gap-6
      py-7

      border-t
    `,
    info: `
      min-w-[240px]
      flex-[1.4]
    `,
    title: `
      m-0

      text-[34px]
      leading-tight
    `,
    subtitle: `
      m-0

      text-muted-foreground
    `,
    price: `
      min-w-[140px]

      font-heading
      text-[30px]
      font-bold
      text-right
    `,
  },
});

export const CourseRow = ({ title, subtitle, schedule, price }: Course) => {
  const styles = courseRowStyles();

  return (
    <li className={styles.root()}>
      <div className={styles.info()}>
        <h2 className={styles.title()}>{title}</h2>
        <p className={styles.subtitle()}>{subtitle}</p>
      </div>
      <Badge variant='gold-outline' size='pill'>
        {schedule}
      </Badge>
      <span className={styles.price()}>{price}</span>
    </li>
  );
};
