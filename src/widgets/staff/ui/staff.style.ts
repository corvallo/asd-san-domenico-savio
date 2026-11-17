import { tv } from 'tailwind-variants';

export const staffStyle = tv({
  slots: {
    root: `
      py-28
    `,
    heading: `
      mb-7
    `,
    grid: `
      grid
      grid-cols-[repeat(auto-fill,minmax(200px,1fr))]

      mt-16
      gap-x-8
      gap-y-10
      p-0

      list-none
    `,
    more: `
      mt-18

      text-center
    `,
  },
});
