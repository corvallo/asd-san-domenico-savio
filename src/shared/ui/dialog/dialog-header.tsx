'use client';

import { dialogStyles } from './dialog-style';
import type { DialogHeaderProps } from './dialog.types';

export const DialogHeader = ({ className, ...props }: DialogHeaderProps) => {
  return <div data-slot='dialog-header' className={dialogStyles().header({ className })} {...props} />;
};
