import { Button } from '~/shared/ui';
import { heroStyles } from './hero.style';

export type HeroAction = { label: string; href: string };

type HeroActionsProps = { primary: HeroAction; secondary: HeroAction };

export const HeroActions = ({ primary, secondary }: HeroActionsProps) => (
  <div className={heroStyles().actions()}>
    <Button as='a' href={primary.href} size='hero'>
      {primary.label}
    </Button>
    <Button as='a' href={secondary.href} size='hero' variant='gold-outline'>
      {secondary.label}
    </Button>
  </div>
);
