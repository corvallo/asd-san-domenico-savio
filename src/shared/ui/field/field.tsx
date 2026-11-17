'use client';

import type { FieldProps } from './field.types';
import { fieldVariants } from './field-style';

export const Field = ({ className, orientation = 'vertical', ...props }: FieldProps) => {
  return (
    <div
      role='group'
      data-slot='field'
      data-orientation={orientation}
      className={fieldVariants({ orientation, className })}
      {...props}
    />
  );
};
