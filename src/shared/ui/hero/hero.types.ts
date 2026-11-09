import type { ComponentPropsWithoutRef } from 'react';

export type HeroProps = ComponentPropsWithoutRef<'section'>;

export type HeroImageSource = Pick<
  ComponentPropsWithoutRef<'source'>,
  'media' | 'type' | 'srcSet' | 'sizes' | 'width' | 'height'
> & {
  srcSet: string;
};

export type HeroImageProps = Pick<
  ComponentPropsWithoutRef<'img'>,
  'src' | 'srcSet' | 'sizes' | 'width' | 'height' | 'className' | 'style'
> & {
  src: string;
  alt: string;
  sources?: HeroImageSource[];
};
