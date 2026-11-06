
import { sxv } from '@stylex-variants/core';

import { background } from '../../styles/semantic/background.stylex';
import { foreground } from '../../styles/semantic/foreground.stylex';
import { layout } from '../../styles/tokens/layout.stylex';

export const sectionStyles = sxv({
    base: {
        width: '100%',
        backgroundColor: background.section,
        color: foreground.primary,
    },

    variants: {
        spacing: {
            none: {
                paddingBlock: 0,
            },
            normal: {
                paddingBlock: layout.sectionGap,
            },
            large: {
                paddingBlock: 'clamp(96px, 12vw, 180px)',
            },
        },
    },

    defaultVariants: {
        spacing: 'normal',
    },
});
