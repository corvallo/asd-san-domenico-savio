import { useSyncExternalStore } from 'react';
import { useCarouselStore } from '../model/carousel-context';
import type { CarouselState } from '../model/types';

// Select primitives or existing references; never allocate a new snapshot here.
export function useCarousel<T>(selector: (state: CarouselState) => T): T {
  const store = useCarouselStore();
  return useSyncExternalStore(
    store.subscribe,
    () => selector(store.getSnapshot()),
    () => selector(store.getServerSnapshot()),
  );
}

export function useCarouselActions() {
  const { prev, next, scrollTo } = useCarouselStore();
  return { prev, next, scrollTo };
}
