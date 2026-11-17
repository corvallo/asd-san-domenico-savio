'use client';

import { sheetStyles } from './sheet-style';
import type { SheetHeaderProps } from './sheet.types';

export const SheetHeader = ({ className, ...props }: SheetHeaderProps) => {
  return <div data-slot='sheet-header' className={sheetStyles().header({ className })} {...props} />;
};
