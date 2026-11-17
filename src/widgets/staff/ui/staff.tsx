import type { StaffMember, StaffRoleFilter } from '~/entities/staff-member';
import { StaffFilter } from '~/features/staff-filter';
import { Button, Container, SectionHeading } from '~/shared/ui';

import { staffStyle } from './staff.style';
import { Portrait } from '~/features/portrait';

type StaffProps = {
  title: string;
  filters: StaffRoleFilter[];
  members: StaffMember[];
  showAll: { label: string; href: string };
};

export const Staff = ({ title, filters, members, showAll }: StaffProps) => {
  const { root, heading, grid, more } = staffStyle();

  return (
    <Container as='section' id='staff' aria-labelledby='staff-title' className={root()}>
      <SectionHeading id='staff-title' title={title} className={heading()} />
      <StaffFilter filters={filters} active='tutti' />
      <ul className={grid()}>
        {members.map((member) => (
          <Portrait key={member.id} title={member.name} subtitle={member.role} />
        ))}
      </ul>
      <div className={more()}>
        <Button as='a' href={showAll.href} size='hero' variant='gold-outline'>
          {showAll.label}
        </Button>
      </div>
    </Container>
  );
};
