import * as stylex from '@stylexjs/stylex';
import { typography } from '../tokens/typography.stylex';

export const text = stylex.defineVars({
  familyBody: typography.fontBody,
  familyHeading: typography.fontDisplay,
  familyDisplay: typography.fontDisplay,
  sizeCaption: typography.textXs,
  sizeLabel: typography.textSm,
  sizeBody: typography.textBase,
  sizeBodyLarge: typography.textLg,
  sizeHeadingSm: typography.text2xl,
  sizeHeadingMd: typography.text3xl,
  sizeHeadingLg: typography.text5xl,
  sizeHeadingXl: typography.text7xl,
  weightBody: typography.weightRegular,
  weightLabel: typography.weightSemibold,
  weightHeading: typography.weightRegular,
  weightStrong: typography.weightBold,
  leadingBody: typography.leadingRelaxed,
  leadingHeading: typography.leadingTight,
  leadingDisplay: typography.leadingNone,
  trackingBody: typography.trackingNormal,
  trackingHeading: typography.trackingTight,
  trackingDisplay: typography.trackingTighter,
  trackingEyebrow: typography.trackingEditorial,
});
