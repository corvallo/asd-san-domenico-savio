import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCarouselStore } from '../model/carousel-context';

export function useBasicCarousel() {
  const store = useCarouselStore();
  const [viewportRef, emblaApi] = useEmblaCarousel(store.options);

  useEffect(() => {
    if (!emblaApi) return;
    return store.connect(emblaApi);
  }, [store, emblaApi]);

  return { viewportRef, emblaApi };
}
