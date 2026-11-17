import { getEntry } from 'astro:content';

import type { Reel } from '../model/types';

export async function getReels(name = 'main'): Promise<Reel[]> {
  const entry = await getEntry('reels', name);

  if (!entry) {
    throw new Error(`"${name}" reels list not found`);
  }
  return entry.data.items
    .filter((item) => item.visible)
    .sort((a, b) => a.order - b.order)
    .map((item) => ({
      id: item.id,
      title: item.title,
      url: item.url,
      cover: item.cover,
    }));
}
