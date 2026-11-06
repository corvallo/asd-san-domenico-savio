import type { PropsWithChildren } from "react";
import { navigationStyle } from "./navigation.style";

export const Navigation = ({ children }: PropsWithChildren) => {
  return (
    <nav aria-label='Primary navigation' {...navigationStyle()}>
      {children}
    </nav>
  );
};
