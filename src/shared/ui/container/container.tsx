import { sxv } from '@stylex-variants/core';
import type { ComponentPropsWithoutRef } from 'react';
import { dimensions } from '../../styles/semantic/layout.stylex';

const containerStyles = sxv({
  base: {
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: dimensions.contentMaxWidth,
    marginInline: 'auto',
    paddingInline: dimensions.pageGutter,
  },
});

export function Container({ className, style, ...props }: ComponentPropsWithoutRef<'div'>) {
  return <div {...props} {...containerStyles({ className, style })} />;
}
