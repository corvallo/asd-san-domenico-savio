import { NavigationMenu as NavigationMenuPrimitive } from '@base-ui/react/navigation-menu';
import type { NavigationMenuContentProps } from './navigation-menu.types';
import { navigationMenuStyles } from './navigation-menu-style';

export const NavigationMenuContent = ({ className, ...props }: NavigationMenuContentProps) => {
  return (
    <NavigationMenuPrimitive.Content
      data-slot='navigation-menu-content'
      className={(state) =>
        navigationMenuStyles().content({ className: typeof className === 'function' ? className(state) : className })
      }
      {...props}
    />
  );
};
