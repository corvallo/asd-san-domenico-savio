import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { EmblaOptionsType } from 'embla-carousel';
import { createCarouselStore, type CarouselStore } from './store';
import type { SlideType } from './types';

const CarouselContext = createContext<CarouselStore | null>(null);

type CarouselProviderProps = {
  slides: readonly SlideType[];
  options?: EmblaOptionsType;
  children: ReactNode;
};

export function CarouselProvider({ slides, options, children }: CarouselProviderProps) {
  // Options configure this instance at mount; slide props remain reactive.
  const [store] = useState(() => createCarouselStore(slides, options));

  useEffect(() => {
    store.setSlides(slides);
  }, [store, slides]);

  return <CarouselContext.Provider value={store}>{children}</CarouselContext.Provider>;
}

export function useCarouselStore() {
  const store = useContext(CarouselContext);
  if (!store) throw new Error('Carousel hooks require CarouselProvider.');
  return store;
}
