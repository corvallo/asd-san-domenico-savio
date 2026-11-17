'use client';

import type { FieldSeparatorProps } from './field.types';
import { fieldStyles } from './field-style';

export const FieldSeparator = ({ children, className, ...props }: FieldSeparatorProps) => {
  return (
    <div
      data-slot='field-separator'
      data-content={!!children}
      className={fieldStyles().separator({ className })}
      {...props}
    >
      <hr className={fieldStyles().separatorLine()} />
      {children && (
        <span className={fieldStyles().separatorContent()} data-slot='field-separator-content'>
          {children}
        </span>
      )}
    </div>
  );
};
