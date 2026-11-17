import { Button as ButtonPrimitive } from '@base-ui/react/button';
import type { ButtonProps } from './button.types';
import { buttonVariants } from './button.style';

export const Button = (props: ButtonProps) => {
  if (props.as === 'a') {
    const { as: _as, className, children, variant = 'default', size = 'default', ...linkProps } = props;
    return (
      <a {...linkProps} data-slot='button' className={buttonVariants({ variant, size, className })}>
        {children}
      </a>
    );
  }

  const { as: _as, className, variant = 'default', size = 'default', ...buttonProps } = props;

  return (
    <ButtonPrimitive
      data-slot='button'
      className={buttonVariants({
        variant,
        size,
        className: className as string,
      })}
      {...buttonProps}
    />
  );
};
