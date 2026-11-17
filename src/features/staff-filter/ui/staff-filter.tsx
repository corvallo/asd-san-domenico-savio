import { tv } from 'tailwind-variants';
import type { StaffRoleFilter } from '~/entities/staff-member';

const staffFilterStyles = tv({
  slots: {
    list: `
      flex
      flex-wrap

      m-0
      gap-3
      p-0

      list-none
    `,
    chip: `
      px-6
      py-2

      font-semibold
      text-gold-text

      bg-transparent

      rounded-full
      border-[1.5px]
      border-gold-text
    `,
  },
  variants: {
    active: {
      true: {
        chip: `
          px-[26px]
          py-2.5

          bg-gold
          text-gold-foreground

          border-0
        `,
      },
    },
  },
});

type StaffFilterProps = { filters: StaffRoleFilter[]; active: StaffRoleFilter['value'] };

/** Role chips. Visual only for now: no filtering logic is wired. */
export const StaffFilter = ({ filters, active }: StaffFilterProps) => {
  const { list } = staffFilterStyles();

  return (
    <ul aria-label='Filtra per ruolo' className={list()}>
      {filters.map((filter) => {
        const isActive = filter.value === active;
        return (
          <li key={filter.value}>
            <button type='button' aria-pressed={isActive} className={staffFilterStyles({ active: isActive }).chip()}>
              {filter.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
