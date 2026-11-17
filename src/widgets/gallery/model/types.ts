import type { PhotoShape } from '~/shared/ui';

export interface GalleryPhoto {
  id: string;
  label: string;
  shape: PhotoShape;
  span: 1 | 2;
  height: 'sm' | 'lg';
}
