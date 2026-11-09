import { headerStyle } from "./header.style";
import type { PropsWithChildren } from "react";

export const Header = ({ children }: PropsWithChildren) => {
  return <header {...headerStyle()}>{children}</header>;
};
