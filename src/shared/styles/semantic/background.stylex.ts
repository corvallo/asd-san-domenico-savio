import * as stylex from '@stylexjs/stylex';
import { colors } from '../tokens/colors.stylex';

export const background = stylex.defineVars({
  page: colors.navy950,
  section: colors.navy900,
  sectionAlt: colors.navy800,
  surface: colors.ivory50,
  surfaceHover: colors.ivory100,
  surfaceElevated: colors.ivory50,
  subtle: colors.navy900,
  muted: colors.navy800,
  inverse: colors.ivory50,
  inverseSubtle: colors.ivory200,
  overlay: 'rgba(6, 23, 39, 0.72)',
  scrim: 'rgba(6, 23, 39, 0.45)',
  transparent: colors.transparent,
});
