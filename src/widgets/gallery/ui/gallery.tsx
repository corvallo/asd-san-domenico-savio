import { tv } from 'tailwind-variants';
import type { GalleryPhoto } from '../model/types';
import { GalleryItem } from './gallery-item';

const galleryStyles = tv({
  base: `
    grid
    grid-cols-1

    m-0
    gap-6
    p-0

    list-none

    md:grid-cols-3
  `,
});

export const Gallery = ({ items }: { items: GalleryPhoto[] }) => (
  <ul className={galleryStyles()}>
    {items.map((item) => (
      <GalleryItem key={item.id} {...item} />
    ))}
  </ul>
);
