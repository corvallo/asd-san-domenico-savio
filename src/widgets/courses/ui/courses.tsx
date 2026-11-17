import { tv } from 'tailwind-variants';
import type { Course } from '~/entities/course';
import { CourseRow } from './course-row';

const coursesStyles = tv({
  base: `
    m-0
    p-0

    list-none

    border-b
  `,
});

export const Courses = ({ items }: { items: Course[] }) => (
  <ul className={coursesStyles()}>
    {items.map((item) => (
      <CourseRow key={item.id} {...item} />
    ))}
  </ul>
);
