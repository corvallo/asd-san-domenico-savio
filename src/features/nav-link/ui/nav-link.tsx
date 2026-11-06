import { navLinkStyle } from "./nav-link.style";
import type { NavLinkProps } from "./nav-link.types";

export const NavLink = ({ href, active, children, className, style, ...rest }: NavLinkProps) => {
  return (
    <a href={href} {...navLinkStyle({ active, className, style })} {...rest}>
      {children}
    </a>
  );
};
