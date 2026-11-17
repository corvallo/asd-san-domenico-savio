'use client';

import { Dialog as DialogPrimitive } from '@base-ui/react/dialog';
import { Button } from '~/shared/ui/button';
import { dialogStyles } from './dialog-style';
import type { DialogFooterProps } from './dialog.types';

export const DialogFooter = ({ className, showCloseButton = false, children, ...props }: DialogFooterProps) => {
  return (
    <div data-slot='dialog-footer' className={dialogStyles().footer({ className })} {...props}>
      {children}
      {showCloseButton && <DialogPrimitive.Close render={<Button variant='outline'>Close</Button>} />}
    </div>
  );
};
