import { Container } from '~/shared/ui';
import { HeroActions, type HeroAction } from './hero-actions';
import { HeroMedia } from './hero-media';
import { heroStyles } from './hero.style';

export type HeroProps = {
  kicker: string;
  title: string;
  titleAccent: string;
  lead: string;
  primaryAction: HeroAction;
  secondaryAction: HeroAction;
  photoLabel: string;
  photoCaption: string;
};

export const Hero = ({
  kicker,
  title,
  titleAccent,
  lead,
  primaryAction,
  secondaryAction,
  photoLabel,
  photoCaption,
}: HeroProps) => {
  const styles = heroStyles();

  return (
    <Container as='section' aria-labelledby='hero-title' className={styles.root()}>
      <div>
        <p className={styles.kicker()}>{kicker}</p>
        <h1 id='hero-title' className={styles.title()}>
          {title}
          <br />
          <em className={styles.accent()}>{titleAccent}</em>
        </h1>
        <p className={styles.lead()}>{lead}</p>
        <HeroActions primary={primaryAction} secondary={secondaryAction} />
      </div>
      <HeroMedia label={photoLabel} caption={photoCaption} />
    </Container>
  );
};
