import * as stylex from '@stylexjs/stylex';
import { colors } from '../../../shared/styles/tokens/colors.stylex';
import { typography } from '../../../shared/styles/tokens/typography.stylex';

export const styles = stylex.create({
  bar: { position: 'absolute', zIndex: 2, top: 0, left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, padding: { default: '16px 3%', '@media (max-width: 800px)': '16px 5%' }, flexWrap: { default: 'nowrap', '@media (max-width: 1000px)': 'wrap' }, color: colors.ivory50 },
  brand: { display: 'flex', alignItems: 'center', flexShrink: 0, color: colors.ivory50, textDecoration: 'none', fontFamily: typography.fontDisplay, fontSize: 20, fontWeight: 600, lineHeight: 0.95 },
  logoSpace: { width: { default: 65, '@media (max-width: 600px)': 0 }, height: 68 },

  enroll: { flexShrink: 0 },

});

