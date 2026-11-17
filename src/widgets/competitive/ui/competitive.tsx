import { tv } from 'tailwind-variants';
import { BandWave, Badge, Container, PhotoPlaceholder, SectionHeading } from '~/shared/ui';

const competitiveStyles = tv({
  slots: {
    band: `
      pt-14
      pb-28

      bg-band
      text-band-foreground
    `,
    grid: `
      grid
      grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))]
      items-center

      gap-14
    `,
    heading: `
      mb-7
    `,
    pillars: `
      flex
      flex-wrap

      m-0
      gap-3
      p-0

      list-none
    `,
    photo: `
      h-[340px]
    `,
  },
});

type CompetitiveProps = { kicker: string; title: string; intro: string; pillars: string[]; photoLabel: string };

export const Competitive = ({ kicker, title, intro, pillars, photoLabel }: CompetitiveProps) => {
  const styles = competitiveStyles();

  return (
    <section id='agonismo' aria-labelledby='competitive-title'>
      <BandWave />
      <div className={styles.band()}>
        <Container className={styles.grid()}>
          <div>
            <SectionHeading
              id='competitive-title'
              tone='band'
              size='lg'
              kicker={kicker}
              title={title}
              intro={intro}
              className={styles.heading()}
            />
            <ul className={styles.pillars()}>
              {pillars.map((pillar) => (
                <li key={pillar}>
                  <Badge variant='band-outline' size='pill'>
                    {pillar}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
          <PhotoPlaceholder shape='petal' label={photoLabel} className={styles.photo()} />
        </Container>
      </div>
    </section>
  );
};
