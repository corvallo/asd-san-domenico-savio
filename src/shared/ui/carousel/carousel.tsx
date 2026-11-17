import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { type ReactNode, useCallback, useEffect, useState } from 'react';
import { tv } from 'tailwind-variants';
import { Button } from '../button';

const carouselStyles = tv({
  slots: {
    header: `
      flex
      flex-wrap
      items-end
      justify-between

      mb-8
      gap-4
    `,
    controls: `
      flex
      gap-2
    `,
    viewport: `
      overflow-hidden
    `,
    track: `
      flex
      touch-pan-y

      m-0
      gap-6
      p-0
      pb-5

      list-none
    `,
  },
});

type CarouselProps = {
  /** Heading content shown left of the arrows. */
  header: ReactNode;
  /** Accessible name of the carousel region. */
  label: string;
  tone?: 'band' | 'gold';
  className?: string;
  /** Slides: `<li>` elements with fixed flex-basis. */
  children: ReactNode;
};

/** Embla "drag free snap" carousel with prev/next arrows. */
export const Carousel = ({ header, label, tone = 'gold', className, children }: CarouselProps) => {
  const styles = carouselStyles();
  const [viewportRef, api] = useEmblaCarousel({ dragFree: true, align: 'start', containScroll: 'trimSnaps' });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const sync = useCallback(() => {
    if (!api) return;
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    sync();
    api.on('select', sync).on('reInit', sync);
    return () => {
      api.off('select', sync).off('reInit', sync);
    };
  }, [api, sync]);

  const variant = tone === 'band' ? 'band-outline' : 'gold-outline';

  return (
    <div role='region' aria-roledescription='carousel' aria-label={label} className={className}>
      <div className={styles.header()}>
        {header}
        <div className={styles.controls()}>
          <Button
            variant={variant}
            size='icon-lg'
            aria-label='Precedente'
            disabled={!canPrev}
            onClick={() => api?.scrollPrev()}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant={variant}
            size='icon-lg'
            aria-label='Successivo'
            disabled={!canNext}
            onClick={() => api?.scrollNext()}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
      <div ref={viewportRef} className={styles.viewport()}>
        <ul className={styles.track()}>{children}</ul>
      </div>
    </div>
  );
};
