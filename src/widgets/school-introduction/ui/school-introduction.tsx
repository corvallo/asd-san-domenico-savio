import * as stylex from "@stylexjs/stylex";
import { colors } from "~/shared/styles/tokens/colors.stylex";
import { typography } from "~/shared/styles/tokens/typography.stylex";
import { ButtonLink } from "~/shared/ui/button";
const styles = stylex.create({
  section: {
    backgroundColor: colors.ivory50,
    color: colors.navy900,
    padding: "64px 9% 80px",
    display: "grid",
    gridTemplateColumns: { default: "1fr 1fr", "@media (max-width: 700px)": "1fr" },
    gap: 48,
    alignItems: "center",
  },
  label: {
    margin: "0 0 16px",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    "::before": { content: '""', display: "inline-block", width: 30, height: 2, backgroundColor: colors.gold500, marginRight: 16, verticalAlign: "middle" },
  },
  title: { margin: 0, fontFamily: typography.fontDisplay, fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 400, lineHeight: 1.06, letterSpacing: "-0.035em" },
  copy: { maxWidth: 360, margin: "20px 0 24px", lineHeight: 1.55 },
  image: { width: "100%", aspectRatio: "4 / 3", objectFit: "cover", borderRadius: 20 },
});
export function SchoolIntroduction() {
  return (
    <section aria-labelledby='school-title' {...stylex.props(styles.section)}>
      <div>
        <p {...stylex.props(styles.label)}>Chi siamo</p>
        <h2 id='school-title' {...stylex.props(styles.title)}>
          Passione,
          <br />
          formazione,
          <br />
          comunità
        </h2>
        <p {...stylex.props(styles.copy)}>
          Dal 1990 a Lecce promuoviamo il pattinaggio artistico a rotelle, come esperienza sportiva, educativa e di crescita personale.
        </p>
        <ButtonLink href='/about' variant='secondary'>
          La nostra storia <span aria-hidden='true'>→</span>
        </ButtonLink>
      </div>
      <img
        src='/images/hero-desktop.webp'
        alt='Pattinatrice artistica sui pattini a rotelle'
        width='1920'
        height='1080'
        loading='lazy'
        {...stylex.props(styles.image)}
      />
    </section>
  );
}
