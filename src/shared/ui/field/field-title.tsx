'use client';

import type { FieldTitleProps } from './field.types';
import { fieldStyles } from './field-style';

export const FieldTitle = ({ className, ...props }: FieldTitleProps) => {
  return <div data-slot='field-label' className={fieldStyles().title({ className })} {...props} />;
};
