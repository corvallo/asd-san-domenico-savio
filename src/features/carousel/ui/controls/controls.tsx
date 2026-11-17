import { useCarousel, useCarouselActions } from '../../api/use-carousel';
import { controlsStyle } from './controls.styles';

export function Controls() {
  const slides = useCarousel((state) => state.slides);
  const selectedIndex = useCarousel((state) => state.selectedIndex);
  const canPrev = useCarousel((state) => state.canPrev);
  const canNext = useCarousel((state) => state.canNext);
  const { prev, next, scrollTo } = useCarouselActions();

  return (
    <>
      {slides.length > 1 && (
        <div className={controlsStyle().controls()}>
          <div className={controlsStyle().dots()}>
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type='button'
                aria-label={`Vai alla slide ${index + 1}`}
                aria-current={index === selectedIndex ? 'true' : undefined}
                onClick={() => scrollTo(index)}
                // className={[styles.dot, index === selectedIndex && styles.dotActive].filter(Boolean).join(" ")}
              />
            ))}
          </div>

          <div className={controlsStyle().arrows()}>
            <button
              type='button'
              aria-label='Slide precedente'
              disabled={!canPrev}
              onClick={() => prev()}
              className={controlsStyle().arrow()}
            >
              ←
            </button>

            <button
              type='button'
              aria-label='Slide successiva'
              disabled={!canNext}
              onClick={() => next()}
              className={controlsStyle().arrow()}
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
