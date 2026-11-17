'use client';

import { Dialog as DialogPrimitive } from '@base-ui/react/dialog';
import type { DialogTriggerProps } from './dialog.types';

export const DialogTrigger = ({ ...props }: DialogTriggerProps) => {
  return <DialogPrimitive.Trigger data-slot='dialog-trigger' {...props} />;
};
