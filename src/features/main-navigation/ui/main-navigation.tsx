import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '~/shared/ui';
import { isActivePath } from '../lib/is-active-path';
import { navigationLinkStyle, navigationListStyle, navigationStyle } from './main-navigation.style';
import type { NavigationItem } from '~/entities/navigation';

type MainNavigationProps = { items: NavigationItem[]; currentPath: string };

export const MainNavigation = ({ items, currentPath }: MainNavigationProps) => {
  return (
    <NavigationMenu className={navigationStyle()}>
      <NavigationMenuList className={navigationListStyle()}>
        {items.map((item) => {
          const active = isActivePath(item.href, currentPath);
          return (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={navigationLinkStyle({ active })}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
