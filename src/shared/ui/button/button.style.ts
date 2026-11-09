
import { colors } from '../../styles/tokens/colors.stylex';
import { sxv } from '@stylex-variants/core';

import { interactive } from '../../styles/semantic/interactive.stylex';
import { radius } from '../../styles/tokens/radius.stylex';
import { spacing } from '../../styles/tokens/spacing.stylex';
import { motion } from '../../styles/tokens/motion.stylex';

export const buttonStyles = sxv({
    base: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: spacing.s2,
        borderRadius: radius.full,
        borderWidth: 1,
        borderStyle: 'solid',
        cursor: 'pointer',
        fontWeight: 600,
        textDecoration: 'none',
        transitionDuration: { default: motion.durationNormal, '@media (prefers-reduced-motion: reduce)': '0s' },
        ':focus-visible': { outline: '2px solid', outlineColor: interactive.focusRing, outlineOffset: 4 },
        ':active': { transform: 'translateY(1px)' },

        ':disabled': {
            opacity: 0.5,
            cursor: 'not-allowed',
        },
    },

    variants: {
        variant: {
            primary: {
                backgroundColor: interactive.primary,
                backgroundImage: `linear-gradient(180deg, ${colors.gold200}, ${colors.gold400})`,
                color: interactive.primaryForeground,
                borderColor: interactive.primary,

                ':hover': {
                    backgroundColor: interactive.primaryHover,
                    backgroundImage: 'none',
                },
            },

            secondary: {
                backgroundColor: colors.transparent,
                color: colors.navy900,
                borderColor: colors.gold500,

                ':hover': {
                    backgroundColor: colors.gold50,
                },
            },

            outline: {
                backgroundColor: 'transparent',
                color: interactive.link,
                borderColor: interactive.link,

                ':hover': {
                    backgroundColor: interactive.ghostHover,
                },
            },
        },

        size: {
            sm: {
                minHeight: spacing.s8,
                paddingInline: spacing.s4,
                fontSize: 12,
            },
            md: {
                minHeight: spacing.s10,
                paddingInline: spacing.s6,
                fontSize: 14,
            },
            lg: {
                minHeight: spacing.s12,
                paddingInline: spacing.s8,
                fontSize: 16,
            },
        },
    },

    defaultVariants: {
        variant: 'primary',
        size: 'md',
    },
});
