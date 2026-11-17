import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { staffRoles } from './roles';

export const staffMemberCollection = defineCollection({
  loader: glob({
    base: './src/entities/staff-member/content',
    pattern: '**/*.json',
  }),
  schema: ({ image }) =>
    z.object({
      items: z.array(
        z.object({
          name: z.string(),
          role: z.string(),
          group: z.enum(staffRoles),
          bio: z.string(),
          photo: image(),
          order: z.number().int(),
          visible: z.boolean().default(true),
        }),
      ),
    }),
});
