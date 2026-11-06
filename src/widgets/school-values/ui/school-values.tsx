import * as stylex from "@stylexjs/stylex";
import { styles } from "./school-values.style";

const pillars = [
  { title: "Tecnica", lines: ["Precisione e controllo", "del movimento."] },
  { title: "Espressività", lines: ["Il movimento diventa", "interpretazione."] },
  { title: "Crescita", lines: ["Impegno, disciplina", "e nuovi traguardi."] },
];

export function Pillars() {
  return (
    <section id='valori' aria-label='I nostri valori' {...stylex.props(styles.pillars)}>
      {pillars.map(({ title, lines }) => (
        <article key={title} {...stylex.props(styles.pillar)}>
          <div aria-hidden='true' {...stylex.props(styles.iconSpace)} />
          <h2 {...stylex.props(styles.pillarTitle)}>{title}</h2>
          <p {...stylex.props(styles.pillarCopy)}>
            {lines[0]}
            <br />
            {lines[1]}
          </p>
        </article>
      ))}
    </section>
  );
}
