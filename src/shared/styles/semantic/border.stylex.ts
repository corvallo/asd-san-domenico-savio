import * as stylex from '@stylexjs/stylex';
import { colors } from '../tokens/colors.stylex';

export const border = stylex.defineVars({
  default: colors.slate200,
  subtle: colors.navy800,
  strong: colors.navy500,
  accent: colors.gold500,
  accentHover: colors.gold300,
  interactive: colors.navy600,
  interactiveHover: colors.gold400,
  focus: colors.gold300,
  inverse: colors.ivory400,
  inverseStrong: colors.ivory600,
  disabled: colors.slate700,
  transparent: colors.transparent,
});
