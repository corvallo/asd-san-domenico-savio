import { NavigationMenu as NavigationMenuPrimitive } from '@base-ui/react/navigation-menu';
import type { NavigationMenuIndicatorProps } from './navigation-menu.types';
import { navigationMenuStyles } from './navigation-menu-style';

export const NavigationMenuIndicator = ({ className, ...props }: NavigationMenuIndicatorProps) => {
  return (
    <NavigationMenuPrimitive.Icon
      data-slot='navigation-menu-indicator'
      className={(state) =>
        navigationMenuStyles().indicator({ className: typeof className === 'function' ? className(state) : className })
      }
      {...props}
    >
      <div className={navigationMenuStyles().indicatorArrow()} />
    </NavigationMenuPrimitive.Icon>
  );
};
