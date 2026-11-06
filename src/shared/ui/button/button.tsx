import { buttonStyles } from "./button.style";
import type { ButtonProps } from "./button.types";

export function Button({ variant, size, className, style, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      {...buttonStyles({
        variant,
        size,
        className,
        style,
      })}
    />
  );
}
