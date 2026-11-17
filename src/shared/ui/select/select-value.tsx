'use client';

import { Select as SelectPrimitive } from '@base-ui/react/select';
import type { SelectValueProps } from './select.types';
import { selectStyles } from './select-style';

export const SelectValue = ({ className, ...props }: SelectValueProps) => {
  return (
    <SelectPrimitive.Value
      data-slot='select-value'
      className={(state) =>
        selectStyles().value({ className: typeof className === 'function' ? className(state) : className })
      }
      {...props}
    />
  );
};
