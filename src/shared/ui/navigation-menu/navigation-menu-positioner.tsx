import { NavigationMenu as NavigationMenuPrimitive } from '@base-ui/react/navigation-menu';
import type { NavigationMenuPositionerProps } from './navigation-menu.types';
import { navigationMenuStyles } from './navigation-menu-style';

export const NavigationMenuPositioner = ({
  className,
  side = 'bottom',
  sideOffset = 8,
  align = 'start',
  alignOffset = 0,
  ...props
}: NavigationMenuPositionerProps) => {
  return (
    <NavigationMenuPrimitive.Portal>
      <NavigationMenuPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className={(state) =>
          navigationMenuStyles().positioner({
            className: typeof className === 'function' ? className(state) : className,
          })
        }
        {...props}
      >
        <NavigationMenuPrimitive.Popup className={navigationMenuStyles().popup()}>
          <NavigationMenuPrimitive.Viewport className={navigationMenuStyles().viewport()} />
        </NavigationMenuPrimitive.Popup>
      </NavigationMenuPrimitive.Positioner>
    </NavigationMenuPrimitive.Portal>
  );
};
