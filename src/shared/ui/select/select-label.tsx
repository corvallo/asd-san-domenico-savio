'use client';

import { Select as SelectPrimitive } from '@base-ui/react/select';
import type { SelectLabelProps } from './select.types';
import { selectStyles } from './select-style';

export const SelectLabel = ({ className, ...props }: SelectLabelProps) => {
  return (
    <SelectPrimitive.GroupLabel
      data-slot='select-label'
      className={(state) =>
        selectStyles().label({ className: typeof className === 'function' ? className(state) : className })
      }
      {...props}
    />
  );
};
