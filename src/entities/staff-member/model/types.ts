import type { staffRoles } from './roles';

export type StaffRole = (typeof staffRoles)[number];

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  group: StaffRole;
  bio: string;
  photo: ImageMetadata;
}

export interface StaffRoleFilter {
  value: StaffRole | 'tutti';
  label: string;
}
