'use client';

import type { AvatarGroupProps } from './avatar.types';
import { avatarStyles } from './avatar-style';

export const AvatarGroup = ({ className, ...props }: AvatarGroupProps) => {
  return <div data-slot='avatar-group' className={avatarStyles().group({ className })} {...props} />;
};
