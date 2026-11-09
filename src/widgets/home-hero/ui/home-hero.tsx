import * as stylex from "@stylexjs/stylex";
import { ButtonLink, Hero as HeroUI } from "~/shared/ui";
import { styles } from "./home-hero.style";
import { WaveDivider } from "~/features/wave-divider";

export function Hero() {
  return (
    <HeroUI.Root>
      <HeroUI.Image
        src='/images/hero-mobile.webp'
        alt=''
        width={720}
        height={1280}
        sources={[
          { media: "(min-width: 1920px)", srcSet: "/images/hero-ultrawide.webp", width: 2100, height: 900 },
          { media: "(min-width: 1200px)", srcSet: "/images/hero-desktop.webp", width: 1920, height: 1080 },
          { media: "(min-width: 1200px)", srcSet: "/images/hero-desktop.webp", width: 1920, height: 1080 },
          { media: "(min-width: 900px)", srcSet: "/images/hero-tablet-landscape.webp", width: 1200, height: 900 },
          { media: "(min-width: 600px)", srcSet: "/images/hero-tablet-portrait.webp", width: 900, height: 1200 },
        ]}
      />
      <HeroUI.Content></HeroUI.Content>
      <div {...stylex.props(styles.heroContent)}>
        <p {...stylex.props(styles.eyebrow)}>Pattinaggio artistico a rotelle</p>
        <h1 id='hero-title' {...stylex.props(styles.title)}>
          Oltre
          <br />
          il <span {...stylex.props(styles.goldWord)}>movimento</span>
        </h1>
        <p {...stylex.props(styles.copy)}>
          Sport, disciplina e creatività
          <br />
          per crescere dentro e fuori dalla pista.
        </p>
        <div {...stylex.props(styles.heroCta)}>
          <ButtonLink href='/corsi' size='lg'>
            Scopri i corsi <span aria-hidden='true'>→</span>
          </ButtonLink>
        </div>
      </div>

      <WaveDivider />
    </HeroUI.Root>
  );
}
