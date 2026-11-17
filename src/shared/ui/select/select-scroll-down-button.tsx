'use client';

import { Select as SelectPrimitive } from '@base-ui/react/select';
import { ChevronDownIcon } from 'lucide-react';
import type { SelectScrollDownButtonProps } from './select.types';
import { selectStyles } from './select-style';

export const SelectScrollDownButton = ({ className, ...props }: SelectScrollDownButtonProps) => {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot='select-scroll-down-button'
      className={(state) =>
        selectStyles().scrollDownButton({ className: typeof className === 'function' ? className(state) : className })
      }
      {...props}
    >
      <ChevronDownIcon />
    </SelectPrimitive.ScrollDownArrow>
  );
};
