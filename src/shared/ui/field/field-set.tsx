'use client';

import type { FieldSetProps } from './field.types';
import { fieldStyles } from './field-style';

export const FieldSet = ({ className, ...props }: FieldSetProps) => {
  return <fieldset data-slot='field-set' className={fieldStyles().set({ className })} {...props} />;
};
