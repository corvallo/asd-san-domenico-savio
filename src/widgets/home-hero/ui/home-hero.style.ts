import * as stylex from '@stylexjs/stylex';
import { colors } from '~/shared/styles/tokens/colors.stylex';
import { typography } from '~/shared/styles/tokens/typography.stylex';

export const styles = stylex.create({
  hero: {
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
  heroContent: {
    gridArea: '1 / 1',
    position: 'relative',
    zIndex: 1,
    alignSelf: 'center',
    paddingTop: 70,
    paddingBottom: 100,
    paddingLeft: '9%',
    paddingRight: '6%',
    '@media (max-width: 1000px)': { alignSelf: 'start', paddingTop: 145 },
    '@media (max-width: 600px)': { paddingTop: 120, paddingLeft: '8%' },
  },
  eyebrow: {
    margin: 0,
    maxWidth: 300,
    textTransform: 'uppercase',
    letterSpacing: '0.28em',
    fontSize: { default: 12, '@media (max-width: 600px)': 10 },
    fontWeight: 500,
  },
  title: {
    margin: '28px 0 0',
    fontFamily: typography.fontDisplay,
    fontWeight: 400,
    fontSize: {
      default: 'clamp(64px, 6.5vw, 100px)',
      '@media (max-width: 600px)': 'clamp(44px, 11vw, 64px)',
    },
    lineHeight: 1.05,
    letterSpacing: '-0.035em',
  },
  goldWord: { color: colors.gold400, fontStyle: 'italic' },
  copy: {
    margin: '24px 0 28px',
    maxWidth: 330,
    fontSize: { default: 16, '@media (max-width: 600px)': 14 },
    lineHeight: 1.55,
  },
  heroCta: { display: 'flex', alignItems: 'center', gap: 20 },
});
