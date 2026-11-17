import type { ComponentPropsWithRef } from 'react';
import type { NavigationMenu as NavigationMenuPrimitive } from '@base-ui/react/navigation-menu';

export type NavigationMenuProps = NavigationMenuPrimitive.Root.Props &
  Pick<NavigationMenuPrimitive.Positioner.Props, 'align'>;

export type NavigationMenuListProps = ComponentPropsWithRef<typeof NavigationMenuPrimitive.List>;

export type NavigationMenuItemProps = ComponentPropsWithRef<typeof NavigationMenuPrimitive.Item>;

export type NavigationMenuTriggerProps = NavigationMenuPrimitive.Trigger.Props;

export type NavigationMenuContentProps = NavigationMenuPrimitive.Content.Props;

export type NavigationMenuPositionerProps = NavigationMenuPrimitive.Positioner.Props;

export type NavigationMenuLinkProps = NavigationMenuPrimitive.Link.Props;

export type NavigationMenuIndicatorProps = ComponentPropsWithRef<typeof NavigationMenuPrimitive.Icon>;
