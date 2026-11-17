'use client';

import { Dialog as SheetPrimitive } from '@base-ui/react/dialog';
import { sheetStyles } from './sheet-style';
import type { SheetOverlayProps } from './sheet.types';

export const SheetOverlay = ({ className, ...props }: SheetOverlayProps) => {
  return (
    <SheetPrimitive.Backdrop
      data-slot='sheet-overlay'
      className={(state) =>
        sheetStyles().overlay({ className: typeof className === 'function' ? className(state) : className })
      }
      {...props}
    />
  );
};
