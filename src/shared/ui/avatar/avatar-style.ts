import { tv } from 'tailwind-variants';

export const avatarStyles = tv({
  slots: {
    root: `
      relative

      group/avatar
      flex
      shrink-0

      size-8

      rounded-full
      select-none

      after:absolute
      after:inset-0
      after:rounded-full
      after:border
      after:border-border
      after:mix-blend-darken
      data-[size=lg]:size-10
      data-[size=sm]:size-6
      dark:after:mix-blend-lighten
    `,
    image: `
      object-cover

      aspect-square
      size-full

      rounded-full
    `,
    fallback: `
      flex
      items-center
      justify-center

      size-full

      text-sm

      bg-muted
      text-muted-foreground

      rounded-full

      group-data-[size=sm]/avatar:text-xs
    `,
    badge: `
      absolute
      right-0
      bottom-0
      z-10

      inline-flex
      items-center
      justify-center

      bg-primary
      text-primary-foreground
      bg-blend-color

      rounded-full
      ring-2
      ring-background
      select-none

      group-data-[size=sm]/avatar:size-2
      group-data-[size=sm]/avatar:[&>svg]:hidden
      group-data-[size=default]/avatar:size-2.5
      group-data-[size=default]/avatar:[&>svg]:size-2
      group-data-[size=lg]/avatar:size-3
      group-data-[size=lg]/avatar:[&>svg]:size-2
    `,
    group: `
      group/avatar-group
      flex

      -space-x-2

      *:data-[slot=avatar]:ring-2
      *:data-[slot=avatar]:ring-background
    `,
    groupCount: `
      relative

      flex
      shrink-0
      items-center
      justify-center

      size-8

      text-sm

      bg-muted
      text-muted-foreground

      rounded-full
      ring-2
      ring-background

      group-has-data-[size=lg]/avatar-group:size-10
      group-has-data-[size=sm]/avatar-group:size-6
      [&>svg]:size-4
      group-has-data-[size=lg]/avatar-group:[&>svg]:size-5
      group-has-data-[size=sm]/avatar-group:[&>svg]:size-3
    `,
  },
});
