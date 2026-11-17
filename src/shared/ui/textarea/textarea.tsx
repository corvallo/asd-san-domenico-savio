import { textareaStyles } from './textarea-style';
import type { TextareaProps } from './textarea.types';

export const Textarea = ({ className, ...props }: TextareaProps) => {
  return <textarea data-slot='textarea' className={textareaStyles({ className })} {...props} />;
};
