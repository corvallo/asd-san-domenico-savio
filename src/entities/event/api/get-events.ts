import { getEntry } from 'astro:content';

import type { ClubEvent } from '../model/types';

export async function getEvents(name = 'main'): Promise<ClubEvent[]> {
  const entry = await getEntry('events', name);

  if (!entry) {
    throw new Error(`"${name}" events list not found`);
  }
  return entry.data.items
    .filter((item) => item.visible)
    .sort((a, b) => a.order - b.order)
    .map((item) => ({
      id: item.id,
      date: item.date,
      title: item.title,
      place: item.place,
      href: item.href,
      description: item.description,
    }));
}
