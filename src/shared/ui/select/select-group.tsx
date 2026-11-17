'use client';

import { Select as SelectPrimitive } from '@base-ui/react/select';
import type { SelectGroupProps } from './select.types';
import { selectStyles } from './select-style';

export const SelectGroup = ({ className, ...props }: SelectGroupProps) => {
  return (
    <SelectPrimitive.Group
      data-slot='select-group'
      className={(state) =>
        selectStyles().group({ className: typeof className === 'function' ? className(state) : className })
      }
      {...props}
    />
  );
};
