import type { ComponentProps } from 'react';
import { cardStyles } from './card-style';

export const CardDescription = ({ className, ...props }: ComponentProps<'div'>) => {
  return <div data-slot='card-description' className={cardStyles().description({ className })} {...props} />;
};
