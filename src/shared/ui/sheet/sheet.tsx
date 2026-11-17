'use client';

import { Dialog as SheetPrimitive } from '@base-ui/react/dialog';
import type { SheetProps } from './sheet.types';

export const Sheet = ({ ...props }: SheetProps) => {
  return <SheetPrimitive.Root data-slot='sheet' {...props} />;
};
