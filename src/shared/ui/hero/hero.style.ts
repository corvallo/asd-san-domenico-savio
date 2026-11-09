import { sxv } from '@stylex-variants/core';
import { colors } from '~/shared/styles/tokens/colors.stylex';

export const heroStyle = sxv({
  base: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: colors.navy950,
    color: colors.ivory50,
    display: 'grid',
    minHeight: {
      default: 680,
      '@media (max-width: 1000px)': 1050,
      '@media (max-width: 600px)': 900,
    },
  },
});

export const heroImageStyle = sxv({
  slots: {
    picture: {
      display: 'block',
      gridArea: '1 / 1',
      alignSelf: 'stretch',
      minWidth: 0,
      minHeight: 0,
      '@media (min-width: 600.01px) and (max-width: 1000px)': {
        position: 'absolute',
        inset: 0,
        paddingTop: 420,
        boxSizing: 'border-box',
      },
      '@media (max-width: 600px)': {
        position: 'absolute',
        inset: 0,
        paddingTop: 350,
        boxSizing: 'border-box',
      },
    },
    image: {
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      '@media (max-width: 1000px)': { objectFit: 'contain', objectPosition: 'center bottom' },
    },
  },
});

export const heroContentStyle = sxv({});
