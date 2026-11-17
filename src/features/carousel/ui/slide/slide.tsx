import type { SlideProps } from '../../model/types';
import { slideStyle } from './slide.style';

export const Slide = ({ slide, index }: SlideProps) => {
  return (
    <div
      key={slide.id}
      className={slideStyle().slideContainer()}
      role='group'
      aria-roledescription='slide'
      aria-label={slide.title}
    >
      <picture className={slideStyle().imageWrapper()}>
        <source media='(min-width: 1440px)' srcSet={`/images/${slide.image}-desktop.webp`} type='image/webp' />
        <source media='(min-width: 1024px)' srcSet={`/images/${slide.image}-laptop.webp`} type='image/webp' />
        <source media='(min-width: 768px)' srcSet={`/images/${slide.image}-tablet.webp`} type='image/webp' />
        <img
          className={slideStyle().image()}
          src={`/images/${slide.image}-mobile.webp`}
          alt={slide.imageAlt}
          fetchPriority={index === 0 ? 'high' : 'auto'}
          loading={index === 0 ? 'eager' : 'lazy'}
        />
      </picture>

      {/* <div className={styles.overlay} />

      <div className={styles.content}>
        <span className={styles.eyebrow}>{slide.eyebrow}</span>

        <h2 className={styles.title}>{slide.title}</h2>

        <p className={styles.description}>{slide.description}</p>

        <a href={slide.cta.href} className={styles.cta}>
          {slide.cta.label}
          <span aria-hidden='true'>↗</span>
        </a>
      </div> */}
    </div>
  );
};
