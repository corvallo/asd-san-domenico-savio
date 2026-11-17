'use client';

import { Dialog as DialogPrimitive } from '@base-ui/react/dialog';
import { dialogStyles } from './dialog-style';
import type { DialogDescriptionProps } from './dialog.types';

export const DialogDescription = ({ className, ...props }: DialogDescriptionProps) => {
  return (
    <DialogPrimitive.Description
      data-slot='dialog-description'
      className={(state) =>
        dialogStyles().description({ className: typeof className === 'function' ? className(state) : className })
      }
      {...props}
    />
  );
};
