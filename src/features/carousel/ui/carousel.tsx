import { usePrefersReducedMotion } from '~/shared/hooks/use-prefers-reduce-motion';
import { CarouselBasic } from './carousel-basic/carousel';
import type { CarouselProps } from '../model/types';
import { CarouselOGL } from './carousel-ogl/carousel-ogl';
import { CarouselProvider } from '../model/carousel-context';

export const Carousel = ({ slides, options }: CarouselProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  return (
    <CarouselProvider slides={slides} options={options}>
      <CarouselBasic />
    </CarouselProvider>
  );
};
