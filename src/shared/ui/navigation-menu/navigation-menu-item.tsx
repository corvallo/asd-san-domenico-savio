import { NavigationMenu as NavigationMenuPrimitive } from '@base-ui/react/navigation-menu';
import type { NavigationMenuItemProps } from './navigation-menu.types';
import { navigationMenuStyles } from './navigation-menu-style';

export const NavigationMenuItem = ({ className, ...props }: NavigationMenuItemProps) => {
  return (
    <NavigationMenuPrimitive.Item
      data-slot='navigation-menu-item'
      className={(state) =>
        navigationMenuStyles().item({ className: typeof className === 'function' ? className(state) : className })
      }
      {...props}
    />
  );
};
