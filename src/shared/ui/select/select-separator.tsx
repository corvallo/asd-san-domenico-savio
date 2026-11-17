'use client';

import { Select as SelectPrimitive } from '@base-ui/react/select';
import type { SelectSeparatorProps } from './select.types';
import { selectStyles } from './select-style';

export const SelectSeparator = ({ className, ...props }: SelectSeparatorProps) => {
  return (
    <SelectPrimitive.Separator
      data-slot='select-separator'
      className={(state) =>
        selectStyles().separator({ className: typeof className === 'function' ? className(state) : className })
      }
      {...props}
    />
  );
};
