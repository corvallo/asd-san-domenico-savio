import { tv } from 'tailwind-variants';
import type { Discipline } from '~/entities/discipline';
import { Container, SectionHeading } from '~/shared/ui';
import { DisciplineRow } from './discipline-row';

const disciplinesStyles = tv({
  slots: {
    root: `
      pb-28
    `,
    heading: `
      mb-10
    `,
    list: `
      m-0
      p-0

      list-none

      border-b
    `,
  },
});

type DisciplinesProps = { title: string; items: Discipline[] };

export const Disciplines = ({ title, items }: DisciplinesProps) => {
  const styles = disciplinesStyles();

  return (
    <Container as='section' id='discipline' aria-labelledby='disciplines-title' className={styles.root()}>
      <SectionHeading id='disciplines-title' title={title} className={styles.heading()} />
      <ul className={styles.list()}>
        {items.map((item) => (
          <DisciplineRow key={item.id} {...item} />
        ))}
      </ul>
    </Container>
  );
};
