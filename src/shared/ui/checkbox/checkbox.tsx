'use client';

import { Checkbox as CheckboxPrimitive } from '@base-ui/react/checkbox';
import { CheckIcon } from 'lucide-react';
import { CheckboxIndicator } from './checkbox-indicator';
import { checkboxStyles } from './checkbox-style';
import type { CheckboxProps } from './checkbox.types';

export const Checkbox = ({ className, ...props }: CheckboxProps) => {
  return (
    <CheckboxPrimitive.Root
      data-slot='checkbox'
      className={(state) =>
        checkboxStyles().root({ className: typeof className === 'function' ? className(state) : className })
      }
      {...props}
    >
      <CheckboxIndicator>
        <CheckIcon />
      </CheckboxIndicator>
    </CheckboxPrimitive.Root>
  );
};
