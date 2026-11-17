'use client';

import { labelStyles } from './label-style';
import type { LabelProps } from './label.types';

export const Label = ({ className, htmlFor, ...props }: LabelProps) => {
  return <label htmlFor={htmlFor} data-slot='label' className={labelStyles({ className })} {...props} />;
};
