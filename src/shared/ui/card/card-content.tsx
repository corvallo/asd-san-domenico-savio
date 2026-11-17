import type { ComponentProps } from 'react';
import { cardStyles } from './card-style';

export const CardContent = ({ className, ...props }: ComponentProps<'div'>) => {
  return <div data-slot='card-content' className={cardStyles().content({ className })} {...props} />;
};
