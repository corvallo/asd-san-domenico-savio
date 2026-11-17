'use client';

import { Dialog as DialogPrimitive } from '@base-ui/react/dialog';
import type { DialogCloseProps } from './dialog.types';

export const DialogClose = ({ ...props }: DialogCloseProps) => {
  return <DialogPrimitive.Close data-slot='dialog-close' {...props} />;
};
