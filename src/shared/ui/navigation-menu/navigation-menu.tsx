import { NavigationMenu as NavigationMenuPrimitive } from '@base-ui/react/navigation-menu';
import { NavigationMenuPositioner } from './navigation-menu-positioner';
import type { NavigationMenuProps } from './navigation-menu.types';
import { navigationMenuStyles } from './navigation-menu-style';

export const NavigationMenu = ({ align = 'start', className, children, ...props }: NavigationMenuProps) => {
  return (
    <NavigationMenuPrimitive.Root
      data-slot='navigation-menu'
      className={(state) =>
        navigationMenuStyles().root({ className: typeof className === 'function' ? className(state) : className })
      }
      {...props}
    >
      {children}
      <NavigationMenuPositioner align={align} />
    </NavigationMenuPrimitive.Root>
  );
};
