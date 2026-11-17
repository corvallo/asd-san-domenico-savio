import { getEntry } from 'astro:content';

import type { Club } from '../model/types';

export async function getClub(name = 'main'): Promise<Club> {
  const entry = await getEntry('club', name);

  if (!entry) {
    throw new Error(`"${name}" club not found`);
  }
  return entry.data;
}
