import { heroStyle } from "./hero.style";
import type { HeroProps } from "./hero.types";

export const HeroRoot = ({ children, ...props }: HeroProps) => {
  return (
    <section {...props} {...heroStyle()}>
      {children}
    </section>
  );
};
