import type { ComponentProps } from 'react';
import { cardStyles } from './card-style';

export const Card = ({
  className,
  size = 'default',
  ...props
}: ComponentProps<'div'> & { size?: 'default' | 'sm' }) => {
  return <div data-slot='card' data-size={size} className={cardStyles().root({ className })} {...props} />;
};
