'use client';

import { Select as SelectPrimitive } from '@base-ui/react/select';
import { CheckIcon } from 'lucide-react';
import type { SelectItemProps } from './select.types';
import { selectStyles } from './select-style';

export const SelectItem = ({ className, children, ...props }: SelectItemProps) => {
  return (
    <SelectPrimitive.Item
      data-slot='select-item'
      className={(state) =>
        selectStyles().item({ className: typeof className === 'function' ? className(state) : className })
      }
      {...props}
    >
      <SelectPrimitive.ItemText className={selectStyles().itemText()}>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator
        render={
          <span className={selectStyles().itemIndicator()}>
            <CheckIcon className={selectStyles().itemIcon()} />
          </span>
        }
      />
    </SelectPrimitive.Item>
  );
};
