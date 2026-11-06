import * as stylex from '@stylexjs/stylex';

export const motion = stylex.defineVars({
  durationInstant: '0ms',
  durationFast: '100ms',
  durationNormal: '200ms',
  durationModerate: '300ms',
  durationSlow: '500ms',
  durationSlower: '700ms',
  easeLinear: 'linear',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeEditorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
});
