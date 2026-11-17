'use client';

import { Avatar as AvatarPrimitive } from '@base-ui/react/avatar';
import type { AvatarProps } from './avatar.types';
import { avatarStyles } from './avatar-style';

export const Avatar = ({ className, size = 'default', ...props }: AvatarProps) => {
  return (
    <AvatarPrimitive.Root
      data-slot='avatar'
      data-size={size}
      className={(state) =>
        avatarStyles().root({ className: typeof className === 'function' ? className(state) : className })
      }
      {...props}
    />
  );
};

export { AvatarImage } from './avatar-image';
export { AvatarFallback } from './avatar-fallback';
export { AvatarBadge } from './avatar-badge';
export { AvatarGroup } from './avatar-group';
export { AvatarGroupCount } from './avatar-group-count';
