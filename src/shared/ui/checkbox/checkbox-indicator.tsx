'use client';

import { Checkbox as CheckboxPrimitive } from '@base-ui/react/checkbox';
import { checkboxStyles } from './checkbox-style';
import type { CheckboxIndicatorProps } from './checkbox.types';

export const CheckboxIndicator = ({ className, ...props }: CheckboxIndicatorProps) => {
  return (
    <CheckboxPrimitive.Indicator
      data-slot='checkbox-indicator'
      className={(state) =>
        checkboxStyles().indicator({ className: typeof className === 'function' ? className(state) : className })
      }
      {...props}
    />
  );
};
