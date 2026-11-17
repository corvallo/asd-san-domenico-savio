'use client';

import { Avatar as AvatarPrimitive } from '@base-ui/react/avatar';
import type { AvatarFallbackProps } from './avatar.types';
import { avatarStyles } from './avatar-style';

export const AvatarFallback = ({ className, ...props }: AvatarFallbackProps) => {
  return (
    <AvatarPrimitive.Fallback
      data-slot='avatar-fallback'
      className={(state) =>
        avatarStyles().fallback({ className: typeof className === 'function' ? className(state) : className })
      }
      {...props}
    />
  );
};
