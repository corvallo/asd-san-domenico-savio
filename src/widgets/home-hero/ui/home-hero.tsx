import * as stylex from "@stylexjs/stylex";
import { ButtonLink } from "~/shared/ui/button";
import { styles } from "./home-hero.style";
import { WaveDivider } from "~/features/wave-divider";

export function Hero() {
  return (
    <section aria-labelledby='hero-title' aria-roledescription='carosello' {...stylex.props(styles.hero)}>
      <picture aria-hidden='true' {...stylex.props(styles.picture)}>
        <source media='(min-width: 1920px)' srcSet='/images/hero-ultrawide.webp' width={2100} height={900} />
        <source media='(min-width: 1200px)' srcSet='/images/hero-desktop.webp' width={1920} height={1080} />
        <source media='(min-width: 900px)' srcSet='/images/hero-tablet-landscape.webp' width={1200} height={900} />
        <source media='(min-width: 600px)' srcSet='/images/hero-tablet-portrait.webp' width={900} height={1200} />
        <img src='/images/hero-mobile.webp' width={720} height={1280} alt='' fetchPriority='high' loading='eager' {...stylex.props(styles.image)} />
      </picture>
      <div {...stylex.props(styles.heroContent)}>
        <p {...stylex.props(styles.eyebrow)}>Pattinaggio artistico a rotelle · Lecce</p>
        <h1 id='hero-title' {...stylex.props(styles.title)}>
          La pista
          <br />è la nostra
          <br />
          <span {...stylex.props(styles.goldWord)}>arte.</span>
        </h1>
        <p {...stylex.props(styles.copy)}>
          Sport, espressione e disciplina.
          <br />
          Un percorso di crescita
          <br />
          per ogni atleta.
        </p>
        <div {...stylex.props(styles.heroCta)}>
          <ButtonLink href='/about' size='lg'>
            Scopri la nostra scuola <span aria-hidden='true'>→</span>
          </ButtonLink>
        </div>
      </div>

      <WaveDivider />
    </section>
  );
}
