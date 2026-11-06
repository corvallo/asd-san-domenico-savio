import type { ComponentPropsWithoutRef } from 'react';
import type { VariantProps } from '@stylex-variants/core';
import { buttonStyles } from './button.style';

type ButtonLinkProps = ComponentPropsWithoutRef<'a'> & VariantProps<typeof buttonStyles>;

export function ButtonLink({ variant, size, className, style, ...props }: ButtonLinkProps) {
  return <a {...props} {...buttonStyles({ variant, size, className, style })} />;
}
