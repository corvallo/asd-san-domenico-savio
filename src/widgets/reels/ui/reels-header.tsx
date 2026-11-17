import { SectionHeading } from '~/shared/ui';

type ReelsHeaderProps = { id: string; kicker: string };

export const ReelsHeader = ({ id, kicker }: ReelsHeaderProps) => (
  <SectionHeading id={id} tone='band' kicker={kicker} title='' />
);
