import * as stylex from '@stylexjs/stylex';
import { sxv } from '@stylex-variants/core';
import { colors } from '../../../shared/styles/tokens/colors.stylex';
import { typography } from '../../../shared/styles/tokens/typography.stylex';

export const styles = stylex.create({
  hero: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: colors.navy950,
    color: colors.ivory50,
    display: 'grid',

    boxSizing: 'border-box',
  },
  picture: {
    display: 'block',
    gridArea: { default: '1 / 1', '@media (max-width: 1199.98px)': '2 / 1' },
    alignSelf: 'end',
    pointerEvents: 'none',
  },
  image: { display: 'block', width: '100%', height: 'auto' },
  heroContent: { gridArea: '1 / 1', alignSelf: 'start', paddingBottom: 48, position: 'relative', zIndex: 1, paddingTop: { default: 'max(120px, 8vw)', '@media (max-width: 1199.98px)': 180 }, paddingLeft: '6.5%', paddingRight: { default: 0, '@media (max-width: 600px)': '8%' } },
  eyebrow: { margin: 0, textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: { default: 'clamp(11px, 1.15vw, 17px)', '@media (max-width: 600px)': 10 }, fontWeight: 500 },
  title: { margin: '32px 0 0', fontFamily: typography.fontDisplay, fontStyle: 'italic', fontWeight: 600, fontSize: { default: 'clamp(72px, 8.4vw, 126px)', '@media (max-width: 600px)': 'clamp(62px, 14vw, 84px)' }, lineHeight: 0.86, letterSpacing: '-0.025em' },
  goldWord: { color: colors.gold400, fontSize: '1.55em', lineHeight: 0.95 },
  copy: { position: 'relative', margin: '32px 0 36px', paddingLeft: 56, fontSize: { default: 'clamp(16px, 1.5vw, 22px)', '@media (max-width: 600px)': 16 }, lineHeight: 1.45, '::before': { content: '""', position: 'absolute', left: 6, top: 0, width: 2, height: 44, backgroundColor: colors.gold400, transform: 'rotate(25deg)' } },
  heroCta: { marginLeft: 22 },
  verticalLabels: { position: 'absolute', right: '4.5%', top: '18vw', display: { default: 'flex', '@media (max-width: 800px)': 'none' }, alignItems: 'center', gap: 26, writingMode: 'vertical-rl', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: 14, fontWeight: 600 },
  labelRule: { width: 2, height: 23, backgroundColor: colors.gold400 },
  chevron: { display: 'block', width: 11, height: 11, borderTop: '2px solid', borderRight: '2px solid', transform: 'rotate(45deg)' },
  chevronLeft: { transform: 'rotate(-135deg)' },
  chevronDown: { transform: 'rotate(135deg)' },
  pagination: { position: 'absolute', right: '4.8%', bottom: '12vw', textAlign: 'center', fontSize: 16 },
  indicators: { display: 'flex', gap: 6, marginTop: 12 },
  indicator: { width: 38, height: 7, border: 0, padding: 0, borderRadius: 8, backgroundColor: colors.slate500 },
  indicatorActive: { backgroundColor: colors.gold400 },
  scrollCue: { position: 'absolute', zIndex: 1, bottom: '8%', left: 'calc(50% - 12px)', display: 'flex', flexDirection: 'column', alignItems: 'center', width: 24, height: 30, color: colors.ivory50 },
  wave: { position: 'absolute', bottom: -1, left: 0, width: '100%', height: '8vw' },
  waveGold: { fill: colors.gold300 },
  waveIvory: { fill: colors.ivory300, stroke: colors.ivory50, strokeWidth: 2 },

});

export const arrowStyles = sxv({
  base: { position: 'absolute', zIndex: 1, bottom: '22vw', width: 49, height: 49, borderRadius: '50%', border: '1px solid', borderColor: colors.slate400, backgroundColor: 'transparent', color: colors.ivory50, display: 'flex', alignItems: 'center', justifyContent: 'center', '@media (max-width: 800px)': { width: 40, height: 40 } },
  variants: { side: { previous: { left: '1.4%' }, next: { right: '1.4%', '@media (max-width: 800px)': { right: 'auto', left: 68 } } } },
  defaultVariants: { side: 'previous' },
});
