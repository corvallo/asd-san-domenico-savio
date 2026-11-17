import { getEntry } from 'astro:content';

import type { Discipline } from '../model/types';

export async function getDisciplines(name = 'main'): Promise<Discipline[]> {
  const entry = await getEntry('disciplines', name);

  if (!entry) {
    throw new Error(`"${name}" disciplines list not found`);
  }
  return entry.data.items
    .filter((item) => item.visible)
    .sort((a, b) => a.order - b.order)
    .map((item) => ({
      id: item.id,
      number: item.number,
      title: item.title,
      description: item.description,
      href: item.href,
    }));
}
