import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const courseCollection = defineCollection({
  loader: glob({
    base: './src/entities/course/content',
    pattern: '**/*.json',
  }),
  schema: z.object({
    items: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        subtitle: z.string(),
        schedule: z.string(),
        price: z.string(),
        order: z.number().int(),
        visible: z.boolean().default(true),
      }),
    ),
  }),
});
