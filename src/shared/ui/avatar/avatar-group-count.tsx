'use client';

import type { AvatarGroupCountProps } from './avatar.types';
import { avatarStyles } from './avatar-style';

export const AvatarGroupCount = ({ className, ...props }: AvatarGroupCountProps) => {
  return <div data-slot='avatar-group-count' className={avatarStyles().groupCount({ className })} {...props} />;
};
