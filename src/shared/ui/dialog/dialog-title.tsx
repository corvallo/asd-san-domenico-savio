'use client';

import { Dialog as DialogPrimitive } from '@base-ui/react/dialog';
import { dialogStyles } from './dialog-style';
import type { DialogTitleProps } from './dialog.types';

export const DialogTitle = ({ className, ...props }: DialogTitleProps) => {
  return (
    <DialogPrimitive.Title
      data-slot='dialog-title'
      className={(state) =>
        dialogStyles().title({ className: typeof className === 'function' ? className(state) : className })
      }
      {...props}
    />
  );
};
