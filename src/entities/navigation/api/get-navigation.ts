import { getEntry } from 'astro:content';

import type { NavigationItem } from '../model/types';

export async function getNavigation(name: string): Promise<NavigationItem[]> {
  const entry = await getEntry('navigation', name);

  if (!entry) {
    throw new Error(`"${name}" main not found`);
  }
  return entry.data.items
    .filter((item) => item.visible)
    .sort((a, b) => a.order - b.order)
    .map((item) => ({
      id: item.href,
      label: item.label,
      href: item.href,
      external: item.external,
    }));
}
