import type { ReactNode } from 'react';
import type { VariantProps } from 'tailwind-variants';
import { photoPlaceholderStyles } from './photo-placeholder.style';

export type PhotoShape = NonNullable<VariantProps<typeof photoPlaceholderStyles>['shape']>;

export type PhotoPlaceholderProps = VariantProps<typeof photoPlaceholderStyles> & {
  label?: string;
  className?: string;
  children?: ReactNode;
};

/** Temporary stand-in for a photo: wood block with a bracketed label. */
export const PhotoPlaceholder = ({ label = '[FOTO]', shape, className, children }: PhotoPlaceholderProps) => {
  return (
    <div role='img' aria-label={label} className={photoPlaceholderStyles({ shape, className })}>
      <span aria-hidden='true'>{label}</span>
      {children}
    </div>
  );
};
