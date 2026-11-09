import * as stylex from "@stylexjs/stylex";
import { WaveDivider } from "~/features/wave-divider";
import { colors } from "~/shared/styles/tokens/colors.stylex";
import { typography } from "~/shared/styles/tokens/typography.stylex";
import { ButtonLink } from "~/shared/ui/button";
const styles = stylex.create({
  hero: {
    position: "relative",
    padding: "150px 9% 64px",
    backgroundColor: colors.navy950,
    color: colors.ivory50,
    overflow: "hidden",
    "::after": {
      content: '""',
      position: "absolute",
      bottom: -28,
      left: "-5%",
      width: "110%",
      height: 48,
      backgroundColor: colors.ivory50,
      borderRadius: "50%",
    },
  },
  title: { margin: 0, fontFamily: typography.fontDisplay, fontSize: "clamp(42px, 5vw, 72px)", fontWeight: 400, lineHeight: 1.1 },
  subtitle: { maxWidth: 420, marginBottom: 0 },
  content: { backgroundColor: colors.ivory50, color: colors.navy900, padding: "48px 9% 80px", minHeight: "45vh" },
  grid: { display: "grid", gridTemplateColumns: { default: "repeat(3, minmax(0, 1fr))", "@media (max-width: 700px)": "1fr" }, gap: 24 },
  card: { backgroundColor: colors.navy900, color: colors.ivory50, borderRadius: 16, padding: 28 },
  heading: { fontFamily: typography.fontDisplay, fontWeight: 400, fontSize: 30, lineHeight: 1.15, margin: "0 0 16px" },
  text: { maxWidth: 640, margin: "0 0 28px" },
});
const pages = {
  about: { title: "Chi siamo", subtitle: "Una storia di passione che continua dal 1990." },
  corsi: { title: "Corsi", subtitle: "Percorsi formativi per ogni età e livello." },
  eventi: { title: "Eventi", subtitle: "Gare, esibizioni e appuntamenti speciali." },
  news: { title: "News", subtitle: "" },
  contatti: { title: "Contatti", subtitle: "" },
};
export function InstitutionalPage({ page }: { page: keyof typeof pages }) {
  const { title, subtitle } = pages[page];
  return (
    <>
      <section {...stylex.props(styles.hero)}>
        <h1 {...stylex.props(styles.title)}>{title}</h1>
        {subtitle && <p {...stylex.props(styles.subtitle)}>{subtitle}</p>}
        <WaveDivider />
      </section>
      <section aria-label={title} {...stylex.props(styles.content)}>
        {page === "about" && (
          <>
            <h2 {...stylex.props(styles.heading)}>
              Educazione, sport
              <br />e crescita
            </h2>
            <p {...stylex.props(styles.text)}>Dal 1990 promuoviamo il pattinaggio artistico a rotelle come esperienza sportiva, educativa e di crescita.</p>
            <ButtonLink href='/corsi' variant='secondary'>
              Scopri i corsi <span aria-hidden='true'>→</span>
            </ButtonLink>
          </>
        )}
        {page === "corsi" && (
          <div {...stylex.props(styles.grid)}>
            {[
              ["Primi Passi", "Dai 4 anni in poi"],
              ["Roll", "Crescita tecnica"],
              ["Avanzato", "Per atleti ambiziosi"],
            ].map(([name, description]) => (
              <article key={name} {...stylex.props(styles.card)}>
                <h2 {...stylex.props(styles.heading)}>{name}</h2>
                <p>{description}</p>
                <ButtonLink href='/contatti' variant='outline' size='sm'>
                  Informazioni <span aria-hidden='true'>→</span>
                </ButtonLink>
              </article>
            ))}
          </div>
        )}
        {page === "eventi" && <p {...stylex.props(styles.text)}>Il calendario degli appuntamenti sarà disponibile prossimamente.</p>}
        {page === "news" && <p {...stylex.props(styles.text)}>Le notizie dell’associazione saranno disponibili prossimamente.</p>}
        {page === "contatti" && (
          <>
            <h2 {...stylex.props(styles.heading)}>Iscriviti ai corsi</h2>
            <p {...stylex.props(styles.text)}>I recapiti e le modalità di iscrizione saranno disponibili prossimamente.</p>
          </>
        )}
      </section>
    </>
  );
}
