'use client';

import { Separator as SeparatorPrimitive } from '@base-ui/react/separator';
import { separatorStyles } from './separator-style';
import type { SeparatorProps } from './separator.types';

export const Separator = ({ className, orientation = 'horizontal', ...props }: SeparatorProps) => {
  return (
    <SeparatorPrimitive
      data-slot='separator'
      orientation={orientation}
      className={(state) =>
        separatorStyles({ className: typeof className === 'function' ? className(state) : className })
      }
      {...props}
    />
  );
};
