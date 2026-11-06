import type {
    ComponentPropsWithoutRef,
} from 'react';

import type { VariantProps } from '@stylex-variants/core';
import type { sectionStyles } from './section.style';

export type SectionProps =
    ComponentPropsWithoutRef<'section'> &
    VariantProps<typeof sectionStyles>;
