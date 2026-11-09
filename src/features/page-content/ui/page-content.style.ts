import { sxv } from '@stylex-variants/core';
import { colors } from '~/shared/styles/tokens/colors.stylex';

export const pageContentStyle = sxv({
  base: {
    backgroundColor: colors.ivory50,
    color: colors.navy900,
    padding: '48px 9% 80px',
    minHeight: '45vh',
  },
});
