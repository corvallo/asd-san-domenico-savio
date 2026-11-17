import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import type { BadgeProps } from './badge.types';
import { badgeVariants } from './badge.style';

export const Badge = ({ className, variant = 'default', size = 'default', render, ...props }: BadgeProps) => {
  return useRender({
    defaultTagName: 'span',
    props: mergeProps<'span'>({ className: badgeVariants({ variant, size, className }) }, props),
    render,
    state: {
      slot: 'badge',
      variant,
    },
  });
};
