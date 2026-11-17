import type { PhotoShape } from '~/shared/ui';

export interface Moment {
  id: string;
  label: string;
  caption?: string;
  shape: PhotoShape;
}
