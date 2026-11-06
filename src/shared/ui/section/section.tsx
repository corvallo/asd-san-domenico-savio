import { sectionStyles } from "./section.style";
import type { SectionProps } from "./section.types";

export function Section({ spacing, className, style, children, ...props }: SectionProps) {
  const variantProps = sectionStyles({ spacing });

  return (
    <section
      {...props}
      className={[variantProps.className, className].filter(Boolean).join(" ")}
      style={{
        ...variantProps.style,
        ...style,
      }}
    >
      {children}
    </section>
  );
}
