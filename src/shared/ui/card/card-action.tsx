import type { ComponentProps } from 'react';
import { cardStyles } from './card-style';

export const CardAction = ({ className, ...props }: ComponentProps<'div'>) => {
  return <div data-slot='card-action' className={cardStyles().action({ className })} {...props} />;
};
