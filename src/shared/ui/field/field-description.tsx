'use client';

import type { FieldDescriptionProps } from './field.types';
import { fieldStyles } from './field-style';

export const FieldDescription = ({ className, ...props }: FieldDescriptionProps) => {
  return <p data-slot='field-description' className={fieldStyles().description({ className })} {...props} />;
};
