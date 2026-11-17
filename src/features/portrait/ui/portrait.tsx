import type { VariantProps } from 'tailwind-variants';
import { PhotoPlaceholder } from '~/shared/ui';
import { portraitStyles } from './portrait.style';

type PortraitProps = VariantProps<typeof portraitStyles> & {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
};

export const Portrait = ({ title, subtitle, description, layout, className }: PortraitProps) => {
  const styles = portraitStyles({ layout });

  return (
    <li className={styles.root({ className })}>
      <div className={styles.frame()}>
        <span aria-hidden='true' className={styles.ring()} />
        <PhotoPlaceholder shape='circle' className={styles.photo()} />
      </div>
      <div className={styles.body()}>
        {title && <h3 className={styles.title()}>{title}</h3>}
        {subtitle && <p className={styles.subtitle()}>{subtitle}</p>}
        {description && <p className={styles.description()}>{description}</p>}
      </div>
    </li>
  );
};
