import { tv } from 'tailwind-variants';

export const waveStyle = tv({
  slots: {
    wave: `
      absolute
      bottom-[-1px]
      left-0

      w-full
      h-[5vw]
    `,
    waveGold: `
      fill-accent
    `,
    waveIvory: `
      fill-foreground
      stroke-foreground
      [stroke-width:2]
    `,
  },
});
