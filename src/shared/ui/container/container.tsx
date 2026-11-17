import type { ComponentProps, ElementType } from 'react';
import { containerStyles } from './container.style';

export type ContainerProps = ComponentProps<'div'> & { as?: ElementType };

export const Container = ({ as: Tag = 'div', className, ...props }: ContainerProps) => {
  return <Tag data-slot='container' className={containerStyles({ className })} {...props} />;
};
