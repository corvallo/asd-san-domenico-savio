'use client';

import { Dialog as DialogPrimitive } from '@base-ui/react/dialog';
import type { DialogPortalProps } from './dialog.types';

export const DialogPortal = ({ ...props }: DialogPortalProps) => {
  return <DialogPrimitive.Portal data-slot='dialog-portal' {...props} />;
};
