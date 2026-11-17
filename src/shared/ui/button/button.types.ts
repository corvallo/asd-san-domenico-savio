import type { ComponentPropsWithRef } from 'react';
import type { VariantProps } from 'tailwind-variants';
import type { Button as ButtonPrimitive } from '@base-ui/react/button';
import type { buttonVariants } from './button.style';

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export type ButtonProps = ButtonVariantProps &
  ((ButtonPrimitive.Props & { as?: 'button' }) | (ComponentPropsWithRef<'a'> & { as: 'a'; href: string }));
