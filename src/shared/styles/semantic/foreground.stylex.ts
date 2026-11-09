import * as stylex from '@stylexjs/stylex';
import { colors } from '../tokens/colors.stylex';

export const foreground = stylex.defineVars({
  primary: colors.ivory50,
  secondary: colors.ivory300,
  tertiary: colors.slate400,
  muted: colors.slate500,
  heading: colors.ivory50,
  body: colors.ivory200,
  accent: colors.gold400,
  accentHover: colors.gold500,
  inverse: colors.navy900,
  inverseSecondary: colors.slate600,
  onAccent: colors.navy950,
  onDanger: colors.white,
  onSuccess: colors.success950,
  disabled: colors.slate500,
});
