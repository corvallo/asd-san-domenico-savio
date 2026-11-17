import type { ComponentProps } from 'react';
import { cardStyles } from './card-style';

export const CardFooter = ({ className, ...props }: ComponentProps<'div'>) => {
  return <div data-slot='card-footer' className={cardStyles().footer({ className })} {...props} />;
};
