import * as stylex from '@stylexjs/stylex';
import { colors } from '../tokens/colors.stylex';

export const feedback = stylex.defineVars({
  success: colors.success500,
  successSubtle: colors.success950,
  successForeground: colors.success100,
  successBorder: colors.success700,
  warning: colors.warning400,
  warningSubtle: colors.warning950,
  warningForeground: colors.warning100,
  warningBorder: colors.warning700,
  danger: colors.danger500,
  dangerSubtle: colors.danger950,
  dangerForeground: colors.danger100,
  dangerBorder: colors.danger700,
  info: colors.navy400,
  infoSubtle: colors.navy900,
  infoForeground: colors.navy100,
  infoBorder: colors.navy600,
});
