import { waveStyle } from './wave-divider.style';

export const WaveDivider = () => {
  return (
    <svg aria-hidden='true' viewBox='0 0 1200 210' preserveAspectRatio='none' className={waveStyle().wave()}>
      <path
        d='M0 200 C185 45 300 135 540 140 C790 150 1030 104 1200 8 L1200 210 L0 210Z'
        className={waveStyle().waveGold()}
      />
      <path
        d='M0 200 C185 45 300 142 540 148 C790 158 1030 118 1200 44 L1200 210 L0 210Z'
        className={waveStyle().waveIvory()}
      />
    </svg>
  );
};
