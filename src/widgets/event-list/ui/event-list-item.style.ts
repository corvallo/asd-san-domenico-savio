import { tv } from 'tailwind-variants';

export const eventListItemStyles = tv({
  slots: {
    root: `
      flex
      flex-col

      gap-8
      py-10

      border-t

      sm:flex-row
      sm:items-center
    `,
    photo: `
      h-[200px]
      w-full
      shrink-0

      sm:h-44
      sm:w-64
    `,
    body: `
      flex
      flex-col
      items-start

      gap-2
    `,
    date: `
      mb-2
      px-6
      py-2.5

      font-semibold

      bg-gold
      text-gold-foreground

      rounded-full
    `,
    title: `
      m-0

      text-[32px]
      leading-tight
    `,
    place: `
      m-0

      font-medium
      text-gold-text
    `,
    description: `
      mt-1
      mb-0
      max-w-[60ch]

      text-muted-foreground
    `,
  },
});
