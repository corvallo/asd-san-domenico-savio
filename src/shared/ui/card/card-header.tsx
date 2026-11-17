import type { ComponentProps } from 'react';
import { cardStyles } from './card-style';

export const CardHeader = ({ className, ...props }: ComponentProps<'div'>) => {
  return <div data-slot='card-header' className={cardStyles().header({ className })} {...props} />;
};
