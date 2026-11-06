import type { ComponentPropsWithoutRef } from 'react';
import type { VariantProps } from '@stylex-variants/core';
import type { buttonStyles } from './button.style';

export type ButtonProps =
    ComponentPropsWithoutRef<'button'> &
    VariantProps<typeof buttonStyles>;