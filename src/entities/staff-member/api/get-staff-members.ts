import { getEntry } from 'astro:content';

import type { StaffMember } from '../model/types';

export async function getStaffMembers(name = 'members'): Promise<StaffMember[]> {
  const entry = await getEntry('staffMembers', name);

  if (!entry) {
    throw new Error(`"${name}" staff list not found`);
  }
  return entry.data.items
    .filter((item) => item.visible)
    .sort((a, b) => a.order - b.order)
    .map((item) => ({
      id: `${item.group}-${item.order}`,
      name: item.name,
      role: item.role,
      group: item.group,
      bio: item.bio,
    }));
}
