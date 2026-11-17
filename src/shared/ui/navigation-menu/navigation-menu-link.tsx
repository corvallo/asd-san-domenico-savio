import { NavigationMenu as NavigationMenuPrimitive } from '@base-ui/react/navigation-menu';
import type { NavigationMenuLinkProps } from './navigation-menu.types';
import { navigationMenuStyles } from './navigation-menu-style';

export const NavigationMenuLink = ({ className, ...props }: NavigationMenuLinkProps) => {
  return (
    <NavigationMenuPrimitive.Link
      data-slot='navigation-menu-link'
      className={(state) =>
        navigationMenuStyles().link({ className: typeof className === 'function' ? className(state) : className })
      }
      {...props}
    />
  );
};
