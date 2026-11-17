import { Input as InputPrimitive } from '@base-ui/react/input';
import { inputStyles } from './input-style';
import type { InputProps } from './input.types';

export const Input = ({ className, type, ...props }: InputProps) => {
  return <InputPrimitive type={type} data-slot='input' className={inputStyles({ className })} {...props} />;
};
