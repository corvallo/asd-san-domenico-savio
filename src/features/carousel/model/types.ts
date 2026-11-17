import type { EmblaOptionsType } from 'embla-carousel';
export type SlideType = {
  id: string;
  image: string;
  imageAlt: string;
  caption?: string;
  title?: string;
  description?: string;
  cta?: {
    label: string;
    href: string;
  };
};

export type SlideProps = { slide: SlideType; index: number };

export type CarouselProps = {
  slides: SlideType[];
  /** Embla options applied when the carousel mounts. */
  options?: EmblaOptionsType;
};

export type UseOGLCarouselProps = {
  intensity: number;
};

export type CarouselState = {
  slides: readonly SlideType[];
  selectedIndex: number;
  canPrev: boolean;
  canNext: boolean;
};
