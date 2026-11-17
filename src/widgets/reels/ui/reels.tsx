import { tv } from "tailwind-variants";
import type { Reel } from "~/entities/reel";
import { BandSection, Button, Container } from "~/shared/ui";
import { ReelTrack } from "./reel-track";
import { ReelsHeader } from "./reels-header";

const reelsStyles = tv({
  slots: {
    more: `
      mt-10

      text-center
    `,
  },
});

type ReelsProps = {
  kicker: string;

  reels: Reel[];
  profile: { label: string; href: string };
};

/** Instagram reels strip: external links only, no embed or API. */
export const Reels = ({ kicker, reels, profile }: ReelsProps) => {
  const styles = reelsStyles();

  return (
    <BandSection id="reel" aria-labelledby="reels-title">
      <Container>
        <ReelTrack
          reels={reels}
          label={kicker}
          header={<ReelsHeader id="reels-title" kicker={kicker} />}
        />
        <div className={styles.more()}>
          <Button
            as="a"
            href={profile.href}
            target="_blank"
            rel="noopener noreferrer"
            size="hero"
            variant="band-outline"
          >
            {profile.label}
          </Button>
        </div>
      </Container>
    </BandSection>
  );
};
