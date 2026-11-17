'use client';

import { Dialog as SheetPrimitive } from '@base-ui/react/dialog';
import { sheetStyles } from './sheet-style';
import type { SheetDescriptionProps } from './sheet.types';

export const SheetDescription = ({ className, ...props }: SheetDescriptionProps) => {
  return (
    <SheetPrimitive.Description
      data-slot='sheet-description'
      className={(state) =>
        sheetStyles().description({ className: typeof className === 'function' ? className(state) : className })
      }
      {...props}
    />
  );
};
