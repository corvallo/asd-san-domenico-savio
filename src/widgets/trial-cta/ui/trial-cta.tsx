import { tv } from 'tailwind-variants';
import { Button, Container, SectionHeading } from '~/shared/ui';

const trialCtaStyles = tv({
  slots: {
    root: `
      pb-22
    `,
    heading: `
      mb-8
    `,
    actionRow: `
      text-center
    `,
    action: `
      px-10
    `,
  },
});

type TrialCtaProps = { title: string; details: string; action: { label: string; href: string } };

export const TrialCta = ({ title, details, action }: TrialCtaProps) => {
  const styles = trialCtaStyles();

  return (
    <Container as='section' id='contatti' aria-labelledby='trial-title' className={styles.root()}>
      <SectionHeading
        id='trial-title'
        align='center'
        size='lg'
        title={title}
        intro={details}
        className={styles.heading()}
      />
      <div className={styles.actionRow()}>
        <Button as='a' href={action.href} size='hero' className={styles.action()}>
          {action.label}
        </Button>
      </div>
    </Container>
  );
};
