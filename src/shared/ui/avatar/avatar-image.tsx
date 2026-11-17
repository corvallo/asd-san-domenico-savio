'use client';

import { Avatar as AvatarPrimitive } from '@base-ui/react/avatar';
import type { AvatarImageProps } from './avatar.types';
import { avatarStyles } from './avatar-style';

export const AvatarImage = ({ className, ...props }: AvatarImageProps) => {
  return (
    <AvatarPrimitive.Image
      data-slot='avatar-image'
      className={(state) =>
        avatarStyles().image({ className: typeof className === 'function' ? className(state) : className })
      }
      {...props}
    />
  );
};
