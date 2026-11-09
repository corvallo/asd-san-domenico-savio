import { heroImageStyle } from "./hero.style";
import type { HeroImageProps } from "./hero.types";

export const HeroImage = ({ sources = [], alt, className, style, ...imgProps }: HeroImageProps) => {
  return (
    <picture {...heroImageStyle.picture()}>
      {sources.map((source, index) => (
        <source key={index} {...source} />
      ))}
      <img {...imgProps} alt={alt} fetchPriority='high' loading='eager' {...heroImageStyle.image({ className, style: (style as unknown as any) ?? "" })} />
    </picture>
  );
};
