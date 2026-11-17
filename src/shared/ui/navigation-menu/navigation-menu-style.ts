import { tv } from 'tailwind-variants';

export const navigationMenuTriggerStyle = tv({
  base: `
    group/navigation-menu-trigger
    inline-flex
    items-center
    justify-center

    h-9
    w-max

    px-2.5
    py-1.5

    text-sm
    font-medium

    rounded-lg
    outline-none

    transition-all

    data-open:bg-muted/50
    data-open:hover:bg-muted
    data-open:focus:bg-muted

    data-popup-open:bg-muted/50
    data-popup-open:hover:bg-muted

    disabled:pointer-events-none
    disabled:opacity-50

    focus:bg-muted

    focus-visible:ring-3
    focus-visible:ring-ring/50
    focus-visible:outline-1

    hover:bg-muted
  `,
});

export const navigationMenuStyles = tv({
  slots: {
    root: `
      relative

      group/navigation-menu
      flex
      flex-1
      items-center
      justify-center

      max-w-max
    `,
    list: `
      group
      flex
      flex-1
      list-none
      items-center
      justify-center

      gap-0
    `,
    item: `
      relative
    `,
    triggerIcon: `
      relative
      top-px

      size-3

      ml-1

      transition
      duration-300

      group-data-open/navigation-menu-trigger:rotate-180

      group-data-popup-open/navigation-menu-trigger:rotate-180
    `,
    content: `
      h-full
      w-auto

      p-1

      transition-[opacity,transform,translate]
      duration-[0.35s]
      ease-[cubic-bezier(0.22,1,0.36,1)]

      **:data-[slot=navigation-menu-link]:focus:ring-0
      **:data-[slot=navigation-menu-link]:focus:outline-none

      data-[motion=from-end]:slide-in-from-right-52

      data-[motion=from-start]:slide-in-from-left-52

      data-[motion=to-end]:slide-out-to-right-52

      data-[motion=to-start]:slide-out-to-left-52

      data-[motion^=from-]:animate-in
      data-[motion^=from-]:fade-in

      data-[motion^=to-]:animate-out
      data-[motion^=to-]:fade-out

      data-ending-style:data-[activation-direction=left]:translate-x-[50%]
      data-ending-style:data-[activation-direction=right]:translate-x-[-50%]
      data-ending-style:opacity-0

      data-starting-style:data-[activation-direction=left]:translate-x-[-50%]
      data-starting-style:data-[activation-direction=right]:translate-x-[50%]
      data-starting-style:opacity-0

      group-data-[viewport=false]/navigation-menu:rounded-lg
      group-data-[viewport=false]/navigation-menu:bg-popover
      group-data-[viewport=false]/navigation-menu:text-popover-foreground
      group-data-[viewport=false]/navigation-menu:shadow
      group-data-[viewport=false]/navigation-menu:ring-1
      group-data-[viewport=false]/navigation-menu:ring-foreground/10
      group-data-[viewport=false]/navigation-menu:duration-300
      group-data-[viewport=false]/navigation-menu:data-open:animate-in
      group-data-[viewport=false]/navigation-menu:data-open:fade-in-0
      group-data-[viewport=false]/navigation-menu:data-open:zoom-in-95
      group-data-[viewport=false]/navigation-menu:data-closed:animate-out
      group-data-[viewport=false]/navigation-menu:data-closed:fade-out-0
      group-data-[viewport=false]/navigation-menu:data-closed:zoom-out-95
    `,
    positioner: `
      isolate
      z-50

      h-(--positioner-height)
      w-(--positioner-width)
      max-w-(--available-width)

      transition-[top,left,right,bottom]
      duration-[0.35s]
      ease-[cubic-bezier(0.22,1,0.36,1)]

      data-[side=bottom]:before:top-[-10px]
      data-[side=bottom]:before:right-0
      data-[side=bottom]:before:left-0

      data-instant:transition-none
    `,
    popup: `
      relative

      h-(--popup-height)
      w-(--popup-width)

      bg-popover
      text-popover-foreground

      rounded-lg
      ring-1
      ring-foreground/10
      outline-none

      origin-(--transform-origin)
      shadow
      transition-[opacity,transform,width,height,scale,translate]
      duration-[0.35s]
      ease-[cubic-bezier(0.22,1,0.36,1)]

      data-[ending-style]:ease-[ease]

      data-ending-style:scale-90
      data-ending-style:opacity-0
      data-ending-style:duration-150

      data-starting-style:scale-90
      data-starting-style:opacity-0

      xs:w-(--popup-width)
    `,
    viewport: `
      relative

      overflow-hidden

      size-full
    `,
    link: `
      flex
      items-center

      gap-2
      p-2

      text-sm

      rounded-lg
      outline-none

      transition-all

      [&_svg:not([class*='size-'])]:size-4

      data-active:bg-muted/50
      data-active:hover:bg-muted
      data-active:focus:bg-muted

      focus:bg-muted

      focus-visible:ring-3
      focus-visible:ring-ring/50
      focus-visible:outline-1

      hover:bg-muted

      in-data-[slot=navigation-menu-content]:rounded-md
    `,
    indicator: `
      top-full
      z-1

      flex
      items-end
      justify-center
      overflow-hidden

      h-1.5

      data-[state=hidden]:animate-out
      data-[state=hidden]:fade-out

      data-[state=visible]:animate-in
      data-[state=visible]:fade-in
    `,
    indicatorArrow: `
      relative
      top-[60%]

      h-2
      w-2

      bg-border

      rounded-tl-sm

      rotate-45
      shadow-md
    `,
  },
});
