import { getEntry } from 'astro:content';

import type { Course } from '../model/types';

export async function getCourses(name = 'main'): Promise<Course[]> {
  const entry = await getEntry('courses', name);

  if (!entry) {
    throw new Error(`"${name}" courses list not found`);
  }
  return entry.data.items
    .filter((item) => item.visible)
    .sort((a, b) => a.order - b.order)
    .map((item) => ({
      id: item.id,
      title: item.title,
      subtitle: item.subtitle,
      schedule: item.schedule,
      price: item.price,
    }));
}
