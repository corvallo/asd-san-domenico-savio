import type { useRender } from '@base-ui/react/use-render';
import type { VariantProps } from 'tailwind-variants';
import type { badgeVariants } from './badge.style';

export type BadgeProps = useRender.ComponentProps<'span'> & VariantProps<typeof badgeVariants>;
