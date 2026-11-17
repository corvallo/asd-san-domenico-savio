import type { CarouselState, SlideType } from './types';
import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';

export const createCarouselStore = (slides: readonly SlideType[], options: EmblaOptionsType = {}) => {
  const emblaOptions: EmblaOptionsType = {
    loop: false,
    dragFree: false,
    align: 'start',
    duration: 60,
    ...options,
  };
  const initState: CarouselState = {
    slides,
    selectedIndex: emblaOptions.startIndex ?? 0,
    canPrev: false,
    canNext: false,
  };

  let state = initState;
  let api: EmblaCarouselType | undefined;
  let disconnect: (() => void) | undefined;

  const listeners = new Set<() => void>();

  const update = (patch: Partial<CarouselState>) => {
    const next = { ...state, ...patch };
    if (
      next.slides === state.slides &&
      next.selectedIndex === state.selectedIndex &&
      next.canPrev === state.canPrev &&
      next.canNext === state.canNext
    ) {
      return;
    }
    state = next;
    listeners.forEach((listener) => listener());
  };

  return {
    options: emblaOptions,
    getSnapshot: () => state,
    getServerSnapshot: () => initState,

    subscribe: (listener: () => void) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },

    setSlides: (slides: readonly SlideType[]) => {
      if (slides === state.slides) return;
      update({ slides });
    },
    prev: () => api?.scrollPrev(),
    next: () => api?.scrollNext(),
    scrollTo: (index: number) => api?.scrollTo(index),
    connect(nextApi: EmblaCarouselType) {
      disconnect?.();
      api = nextApi;
      const lastSnap = Math.max(0, nextApi.scrollSnapList().length - 1);
      nextApi.scrollTo(Math.min(state.selectedIndex, lastSnap), true);

      const sync = () => {
        update({
          selectedIndex: nextApi.selectedScrollSnap(),
          canPrev: nextApi.canScrollPrev(),
          canNext: nextApi.canScrollNext(),
        });
      };

      nextApi.on('select', sync);
      nextApi.on('reInit', sync);
      sync();

      const cleanup = () => {
        nextApi.off('select', sync);
        nextApi.off('reInit', sync);

        if (disconnect === cleanup) {
          api = undefined;
          disconnect = undefined;
          update({ canPrev: false, canNext: false });
        }
      };

      disconnect = cleanup;
      return cleanup;
    },
  };
};
export type CarouselStore = ReturnType<typeof createCarouselStore>;
