import { tv } from 'tailwind-variants';

export const cardStyles = tv({
  slots: {
    root: `
      group/card
      flex
      flex-col
      overflow-hidden

      gap-(--card-spacing)
      py-(--card-spacing)
      [--card-spacing:--spacing(4)]

      text-sm

      bg-card
      text-card-foreground

      rounded-2xl
      border
      border-border

      has-data-[slot=card-footer]:pb-0
      has-[>img:first-child]:pt-0
      data-[size=sm]:[--card-spacing:--spacing(3)]
      data-[size=sm]:has-data-[slot=card-footer]:pb-0
      *:[img:first-child]:rounded-t-2xl
      *:[img:last-child]:rounded-b-2xl
    `,
    header: `
      group/card-header
      @container/card-header
      grid
      auto-rows-min
      items-start

      gap-1
      px-(--card-spacing)

      rounded-t-2xl

      has-data-[slot=card-action]:grid-cols-[1fr_auto]
      has-data-[slot=card-description]:grid-rows-[auto_auto]
      [.border-b]:pb-(--card-spacing)
    `,
    title: `
      font-heading
      text-base
      leading-snug
      font-medium

      group-data-[size=sm]/card:text-sm
    `,
    description: `
      text-sm

      text-muted-foreground
    `,
    action: `
      col-start-2
      row-span-2
      row-start-1
      self-start
      justify-self-end
    `,
    content: `
      px-(--card-spacing)
    `,
    footer: `
      flex
      items-center

      p-(--card-spacing)

      bg-muted/50

      rounded-b-2xl
      border-t
    `,
  },
});
