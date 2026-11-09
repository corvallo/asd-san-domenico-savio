import type { PropsWithChildren } from "react";
import { navigationStyle } from "./nav.style";

export const Nav = ({ children }: PropsWithChildren) => {
  return (
    <nav aria-label='Primary navigation' {...navigationStyle()}>
      {children}
    </nav>
  );
};
