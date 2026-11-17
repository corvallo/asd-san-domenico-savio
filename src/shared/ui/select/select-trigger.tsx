'use client';

import { Select as SelectPrimitive } from '@base-ui/react/select';
import { ChevronDownIcon } from 'lucide-react';
import type { SelectTriggerProps } from './select.types';
import { selectStyles } from './select-style';

export const SelectTrigger = ({ className, size = 'default', children, ...props }: SelectTriggerProps) => {
  return (
    <SelectPrimitive.Trigger
      data-slot='select-trigger'
      data-size={size}
      className={(state) =>
        selectStyles().trigger({ className: typeof className === 'function' ? className(state) : className })
      }
      {...props}
    >
      {children}
      <SelectPrimitive.Icon render={<ChevronDownIcon className={selectStyles().triggerIcon()} />} />
    </SelectPrimitive.Trigger>
  );
};
