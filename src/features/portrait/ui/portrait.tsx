import type { VariantProps } from 'tailwind-variants';
import { PhotoPlaceholder } from '~/shared/ui';
import { portraitStyles } from './portrait.style';

type PortraitProps = VariantProps<typeof portraitStyles> & {
  title?: string;
  subtitle?: string;
  description?: string;
  photo?: ImageMetadata;
  className?: string;
};

export const Portrait = ({ title, subtitle, description, photo, layout, className }: PortraitProps) => {
  const styles = portraitStyles({ layout });

  return (
    <li className={styles.root({ className })}>
      <div className={styles.frame()}>
        <span aria-hidden='true' className={styles.ring()} />
        {photo ? (
          <div className={styles.photo({ class: styles.image() })}>
            <img
              src={photo.src}
              width={photo.width}
              height={photo.height}
              alt={title ?? ''}
              loading='lazy'
              decoding='async'
              className={styles.img()}
            />
          </div>
        ) : (
          <PhotoPlaceholder shape='circle' className={styles.photo()} />
        )}
      </div>
      <div className={styles.body()}>
        {title && <h3 className={styles.title()}>{title}</h3>}
        {subtitle && <p className={styles.subtitle()}>{subtitle}</p>}
        {description && <p className={styles.description()}>{description}</p>}
      </div>
    </li>
  );
};
