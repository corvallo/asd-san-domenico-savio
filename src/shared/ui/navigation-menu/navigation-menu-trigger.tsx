import { NavigationMenu as NavigationMenuPrimitive } from '@base-ui/react/navigation-menu';
import { ChevronDownIcon } from 'lucide-react';
import type { NavigationMenuTriggerProps } from './navigation-menu.types';
import { navigationMenuStyles, navigationMenuTriggerStyle } from './navigation-menu-style';

export const NavigationMenuTrigger = ({ className, children, ...props }: NavigationMenuTriggerProps) => {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot='navigation-menu-trigger'
      className={(state) =>
        navigationMenuTriggerStyle({
          className: ['group', typeof className === 'function' ? className(state) : className],
        })
      }
      {...props}
    >
      {children} <ChevronDownIcon className={navigationMenuStyles().triggerIcon()} aria-hidden='true' />
    </NavigationMenuPrimitive.Trigger>
  );
};
