'use client';

import { Dialog as DialogPrimitive } from '@base-ui/react/dialog';
import { dialogStyles } from './dialog-style';
import type { DialogOverlayProps } from './dialog.types';

export const DialogOverlay = ({ className, ...props }: DialogOverlayProps) => {
  return (
    <DialogPrimitive.Backdrop
      data-slot='dialog-overlay'
      className={(state) =>
        dialogStyles().overlay({ className: typeof className === 'function' ? className(state) : className })
      }
      {...props}
    />
  );
};
