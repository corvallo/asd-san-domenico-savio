'use client';

import type { FieldContentProps } from './field.types';
import { fieldStyles } from './field-style';

export const FieldContent = ({ className, ...props }: FieldContentProps) => {
  return <div data-slot='field-content' className={fieldStyles().content({ className })} {...props} />;
};
