'use client';

import type { FieldLabelProps } from './field.types';
import { fieldStyles } from './field-style';

export const FieldLabel = ({ className, htmlFor, ...props }: FieldLabelProps) => {
  return <label htmlFor={htmlFor} data-slot='field-label' className={fieldStyles().label({ className })} {...props} />;
};
