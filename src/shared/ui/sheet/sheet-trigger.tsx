'use client';

import { Dialog as SheetPrimitive } from '@base-ui/react/dialog';
import type { SheetTriggerProps } from './sheet.types';

export const SheetTrigger = ({ ...props }: SheetTriggerProps) => {
  return <SheetPrimitive.Trigger data-slot='sheet-trigger' {...props} />;
};
