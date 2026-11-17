import { tv } from 'tailwind-variants';

export const controlsStyle = tv({
  slots: {
    controls: `
      absolute
      z-2
      bottom-[clamp(24px,_5vw,_64px)]
      left-[clamp(24px,_7vw,_112px)]
      right-[clamp(24px,_7vw,_112px)]

      flex
      justify-between
      items-center
    `,
    dots: `
      flex
      items-center

      gap-[10px]
    `,
    dot: `
      w-[16px]
      h-[3px]

      p-0

      bg-[rgba(255,_255,_255,_.45)]

      border-0

      cursor-pointer
      [transition:width_250ms_ease,_background-color_250ms_ease]
    `,
    dotActive: `
      w-[36px]

      bg-[#E3C68E]
    `,
    arrows: `
      flex

      gap-[12px]
    `,
    arrow: `
      grid
      place-items-center

      w-[46px]
      h-[46px]

      text-[20px]

      bg-[rgba(11,33,56,.25)]
      text-[#FFFFFF]

      [border:1px_solid_rgba(255,255,255,.5)]
      rounded-[50%]

      cursor-pointer
      [transition:background-color_200ms_ease]

      hover:bg-[rgba(255,255,255,.18)]
    `,
  },
});
