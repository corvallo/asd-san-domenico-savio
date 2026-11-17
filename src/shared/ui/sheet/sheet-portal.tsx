'use client';

import { Dialog as SheetPrimitive } from '@base-ui/react/dialog';
import type { SheetPortalProps } from './sheet.types';

export const SheetPortal = ({ ...props }: SheetPortalProps) => {
  return <SheetPrimitive.Portal data-slot='sheet-portal' {...props} />;
};
