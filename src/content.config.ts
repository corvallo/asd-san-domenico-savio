import { clubCollection } from '~/entities/club';
import { courseCollection } from '~/entities/course';
import { disciplineCollection } from '~/entities/discipline';
import { eventCollection } from '~/entities/event';
import { navigationCollection } from '~/entities/navigation';
import { staffMemberCollection } from '~/entities/staff-member';
import { pageCollection } from '~/pages/_editorial';

export const collections = {
  club: clubCollection,
  courses: courseCollection,
  disciplines: disciplineCollection,
  events: eventCollection,
  navigation: navigationCollection,
  pages: pageCollection,
  staffMembers: staffMemberCollection,
};
