import { sxv } from '@stylex-variants/core';
import { colors } from '~/shared/styles/tokens/colors.stylex';
import { typography } from '~/shared/styles/tokens/typography.stylex';

export const pageHeaderStyle = sxv({
  slots: {
    root: {
      position: 'relative',
      padding: '150px 9% 64px',
      backgroundColor: colors.navy950,
      color: colors.ivory50,
      overflow: 'hidden',
      '::after': {
        content: '""',
        position: 'absolute',
        bottom: -28,
        left: '-5%',
        width: '110%',
        height: 48,
        backgroundColor: colors.ivory50,
        borderRadius: '50%',
      },
    },
    title: {
      margin: 0,
      fontFamily: typography.fontDisplay,
      fontSize: 'clamp(42px, 5vw, 72px)',
      fontWeight: 400,
      lineHeight: 1.1,
    },
    subtitle: {
      maxWidth: 420,
      marginBottom: 0,
    },
  },
});
