import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const clubCollection = defineCollection({
  loader: glob({
    base: './src/entities/club/content',
    pattern: '**/*.json',
  }),
  schema: z.object({
    name: z.string(),
    city: z.string(),
    slogan: z.string(),
    address: z.string(),
    phone: z.string(),
    email: z.string(),
    officeHours: z.string(),
    vatNumber: z.string(),
    socials: z.array(
      z.object({
        label: z.string(),
        href: z.string(),
      }),
    ),
  }),
});
