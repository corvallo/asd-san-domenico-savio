'use client';

import type { FieldGroupProps } from './field.types';
import { fieldStyles } from './field-style';

export const FieldGroup = ({ className, ...props }: FieldGroupProps) => {
  return <div data-slot='field-group' className={fieldStyles().group({ className })} {...props} />;
};
