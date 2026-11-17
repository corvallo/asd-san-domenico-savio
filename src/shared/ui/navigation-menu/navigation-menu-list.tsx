import { NavigationMenu as NavigationMenuPrimitive } from '@base-ui/react/navigation-menu';
import type { NavigationMenuListProps } from './navigation-menu.types';
import { navigationMenuStyles } from './navigation-menu-style';

export const NavigationMenuList = ({ className, ...props }: NavigationMenuListProps) => {
  return (
    <NavigationMenuPrimitive.List
      data-slot='navigation-menu-list'
      className={(state) =>
        navigationMenuStyles().list({ className: typeof className === 'function' ? className(state) : className })
      }
      {...props}
    />
  );
};
