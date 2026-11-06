import * as stylex from '@stylexjs/stylex';

export const layout = stylex.defineVars({
  containerSm: '640px',
  containerMd: '768px',
  containerLg: '1024px',
  containerXl: '1280px',
  container2xl: '1440px',
  pageGutter: 'clamp(20px, 5vw, 80px)',
  sectionGap: 'clamp(64px, 8vw, 128px)',
  headerHeight: '88px',
  heroMinHeight: '720px',
  zBase: '0',
  zContent: '10',
  zDropdown: '20',
  zSticky: '30',
  zOverlay: '40',
  zModal: '50',
});
