import { tv } from 'tailwind-variants';
import type { StaffMember } from '~/entities/staff-member';
import { Portrait } from '~/features/portrait';

const staffListStyles = tv({
  slots: {
    list: `
      m-0
      p-0

      list-none

      border-b
    `,
    item: `
      py-10

      border-t
    `,
  },
});

/** Full staff roster: portrait on the left, name, role and bio on the right. */
export const StaffList = ({ members }: { members: StaffMember[] }) => {
  const styles = staffListStyles();

  return (
    <ul className={styles.list()}>
      {members.map((member) => (
        <Portrait
          key={member.id}
          layout='row'
          title={member.name}
          subtitle={member.role}
          description={member.bio}
          className={styles.item()}
        />
      ))}
    </ul>
  );
};
