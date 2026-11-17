'use client';

import { Dialog as SheetPrimitive } from '@base-ui/react/dialog';
import { sheetStyles } from './sheet-style';
import type { SheetTitleProps } from './sheet.types';

export const SheetTitle = ({ className, ...props }: SheetTitleProps) => {
  return (
    <SheetPrimitive.Title
      data-slot='sheet-title'
      className={(state) =>
        sheetStyles().title({ className: typeof className === 'function' ? className(state) : className })
      }
      {...props}
    />
  );
};
