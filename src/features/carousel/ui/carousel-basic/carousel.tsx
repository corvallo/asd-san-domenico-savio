import { Slide } from '../slide/slide';
import { useCarousel } from '../../api/use-carousel';
import { useBasicCarousel } from '../../api/use-basic-carousel';
import { Controls } from '../controls/controls';
import { carouselStyle } from './carousel-basic.style';

export function CarouselBasic() {
  const { viewportRef } = useBasicCarousel();
  const slides = useCarousel((state) => state.slides);

  return (
    <section
      className={carouselStyle().root()}
      aria-label='Pattinaggio artistico San Domenico Savio'
      aria-roledescription='carousel'
    >
      <div className={carouselStyle().viewport()} ref={viewportRef}>
        <div className={carouselStyle().container()}>
          {slides.map((slide, index) => (
            <Slide slide={slide} index={index} key={slide.id} />
          ))}
        </div>
      </div>
      <Controls />
    </section>
  );
}
