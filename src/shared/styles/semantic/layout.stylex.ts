import * as stylex from '@stylexjs/stylex';
import { layout } from '../tokens/layout.stylex';
import { spacing } from '../tokens/spacing.stylex';

export const dimensions = stylex.defineVars({
  contentMaxWidth: layout.containerXl,
  contentNarrowWidth: layout.containerMd,
  pageGutter: layout.pageGutter,
  sectionSpacing: layout.sectionGap,
  headerHeight: layout.headerHeight,
  stackGapSm: spacing.s3,
  stackGapMd: spacing.s6,
  stackGapLg: spacing.s10,
  gridGap: spacing.s6,
  controlHeightSm: spacing.s8,
  controlHeightMd: spacing.s10,
  controlHeightLg: spacing.s12,
});
