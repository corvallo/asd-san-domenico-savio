'use client';

import { Dialog as SheetPrimitive } from '@base-ui/react/dialog';
import { XIcon } from 'lucide-react';
import { Button } from '~/shared/ui/button';
import { SheetPortal } from './sheet-portal';
import { SheetOverlay } from './sheet-overlay';
import { sheetStyles } from './sheet-style';
import type { SheetContentProps } from './sheet.types';

export const SheetContent = ({
  className,
  children,
  side = 'right',
  showCloseButton = true,
  ...props
}: SheetContentProps) => {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Popup
        data-slot='sheet-content'
        data-side={side}
        className={(state) =>
          sheetStyles().content({ className: typeof className === 'function' ? className(state) : className })
        }
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close
            data-slot='sheet-close'
            render={
              <Button variant='ghost' className={sheetStyles().closeButton()} size='icon-sm'>
                <XIcon />
                <span className={sheetStyles().closeLabel()}>Close</span>
              </Button>
            }
          />
        )}
      </SheetPrimitive.Popup>
    </SheetPortal>
  );
};
