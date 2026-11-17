import type { ComponentProps } from 'react';
import { cardStyles } from './card-style';

export const CardTitle = ({ className, ...props }: ComponentProps<'div'>) => {
  return <div data-slot='card-title' className={cardStyles().title({ className })} {...props} />;
};
