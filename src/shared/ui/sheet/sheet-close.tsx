'use client';

import { Dialog as SheetPrimitive } from '@base-ui/react/dialog';
import type { SheetCloseProps } from './sheet.types';

export const SheetClose = ({ ...props }: SheetCloseProps) => {
  return <SheetPrimitive.Close data-slot='sheet-close' {...props} />;
};
