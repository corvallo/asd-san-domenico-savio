'use client';

import { sheetStyles } from './sheet-style';
import type { SheetFooterProps } from './sheet.types';

export const SheetFooter = ({ className, ...props }: SheetFooterProps) => {
  return <div data-slot='sheet-footer' className={sheetStyles().footer({ className })} {...props} />;
};
