'use client';

import { Dialog as DialogPrimitive } from '@base-ui/react/dialog';
import { XIcon } from 'lucide-react';
import { Button } from '~/shared/ui/button';
import { DialogPortal } from './dialog-portal';
import { DialogOverlay } from './dialog-overlay';
import { dialogStyles } from './dialog-style';
import type { DialogContentProps } from './dialog.types';

export const DialogContent = ({ className, children, showCloseButton = true, ...props }: DialogContentProps) => {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Popup
        data-slot='dialog-content'
        className={(state) =>
          dialogStyles().content({ className: typeof className === 'function' ? className(state) : className })
        }
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot='dialog-close'
            render={
              <Button variant='ghost' className={dialogStyles().closeButton()} size='icon-sm'>
                <XIcon />
                <span className={dialogStyles().closeLabel()}>Close</span>
              </Button>
            }
          />
        )}
      </DialogPrimitive.Popup>
    </DialogPortal>
  );
};
