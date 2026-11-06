import * as stylex from '@stylexjs/stylex';
import { colors } from '../../../shared/styles/tokens/colors.stylex';
import { typography } from '../../../shared/styles/tokens/typography.stylex';

export const styles = stylex.create({
  pillars: { position: 'relative', display: 'grid', gridTemplateColumns: { default: 'repeat(3, minmax(0, 1fr))', '@media (max-width: 600px)': '1fr' }, backgroundColor: colors.ivory300, color: colors.navy900, padding: { default: '0 4.5% 70px', '@media (max-width: 600px)': '0 8% 48px' }, scrollMarginTop: 24 },
  pillar: { position: 'relative', textAlign: 'center', paddingInline: 16, marginTop: -20, paddingBottom: { default: 0, '@media (max-width: 600px)': 32 }, '::after': { content: '""', position: 'absolute', right: 0, top: 34, width: 1, height: 116, backgroundColor: colors.gold300 }, ':last-child::after': { display: 'none' }, '@media (max-width: 600px)': { marginTop: 0, '::after': { display: 'none' } } },
  iconSpace: { height: 60 },
  pillarTitle: { fontFamily: typography.fontDisplay, fontSize: 'clamp(28px, 2.6vw, 40px)', fontWeight: 600, lineHeight: 1.1, margin: '8px 0' },
  pillarCopy: { fontSize: 'clamp(16px, 1.65vw, 22px)', lineHeight: 1.4, margin: 0 },
});

