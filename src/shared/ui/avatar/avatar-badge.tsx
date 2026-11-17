'use client';

import type { AvatarBadgeProps } from './avatar.types';
import { avatarStyles } from './avatar-style';

export const AvatarBadge = ({ className, ...props }: AvatarBadgeProps) => {
  return <span data-slot='avatar-badge' className={avatarStyles().badge({ className })} {...props} />;
};
