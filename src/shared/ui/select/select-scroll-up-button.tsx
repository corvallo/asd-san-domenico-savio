'use client';

import { Select as SelectPrimitive } from '@base-ui/react/select';
import { ChevronUpIcon } from 'lucide-react';
import type { SelectScrollUpButtonProps } from './select.types';
import { selectStyles } from './select-style';

export const SelectScrollUpButton = ({ className, ...props }: SelectScrollUpButtonProps) => {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot='select-scroll-up-button'
      className={(state) =>
        selectStyles().scrollUpButton({ className: typeof className === 'function' ? className(state) : className })
      }
      {...props}
    >
      <ChevronUpIcon />
    </SelectPrimitive.ScrollUpArrow>
  );
};
