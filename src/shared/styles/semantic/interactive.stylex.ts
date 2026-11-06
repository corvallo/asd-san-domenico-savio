import * as stylex from '@stylexjs/stylex';
import { colors } from '../tokens/colors.stylex';

export const interactive = stylex.defineVars({
  primary: colors.gold400,
  primaryHover: colors.gold300,
  primaryActive: colors.gold500,
  primaryForeground: colors.navy950,
  secondary: colors.navy800,
  secondaryHover: colors.navy700,
  secondaryActive: colors.navy600,
  secondaryForeground: colors.ivory50,
  ghostHover: colors.navy800,
  ghostActive: colors.navy700,
  link: colors.gold400,
  linkHover: colors.gold300,
  linkVisited: colors.gold500,
  selected: colors.gold400,
  selectedForeground: colors.navy950,
  disabled: colors.slate700,
  disabledForeground: colors.slate400,
  focusRing: colors.gold300,
});
