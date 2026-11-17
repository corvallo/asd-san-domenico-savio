'use client';

import type { FieldLegendProps } from './field.types';
import { fieldStyles } from './field-style';

export const FieldLegend = ({ className, variant = 'legend', ...props }: FieldLegendProps) => {
  return (
    <legend
      data-slot='field-legend'
      data-variant={variant}
      className={fieldStyles().legend({ className })}
      {...props}
    />
  );
};
