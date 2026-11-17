import type { ReactNode } from 'react';
import type { VariantProps } from 'tailwind-variants';
import { sectionHeadingStyles } from './section-heading.style';

export type SectionHeadingProps = VariantProps<typeof sectionHeadingStyles> & {
  title: ReactNode;
  kicker?: ReactNode;
  intro?: ReactNode;
  id?: string;
  className?: string;
};

export const SectionHeading = ({ title, kicker, intro, id, size, tone, align, className }: SectionHeadingProps) => {
  const styles = sectionHeadingStyles({ size, tone, align });

  return (
    <div className={styles.root({ className })}>
      {kicker && <p className={styles.kicker()}>{kicker}</p>}
      <h2 id={id} className={styles.title()}>
        {title}
      </h2>
      {intro && <p className={styles.intro()}>{intro}</p>}
    </div>
  );
};
