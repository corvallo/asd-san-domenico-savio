'use client';

import { Select as SelectPrimitive } from '@base-ui/react/select';
import type { SelectProps } from './select.types';

export const Select = <Value, Multiple extends boolean | undefined = false>(props: SelectProps<Value, Multiple>) => {
  return <SelectPrimitive.Root {...props} />;
};
