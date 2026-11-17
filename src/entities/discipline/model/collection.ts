import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const disciplineCollection = defineCollection({
  loader: glob({
    base: './src/entities/discipline/content',
    pattern: '**/*.json',
  }),
  schema: z.object({
    items: z.array(
      z.object({
        id: z.string(),
        number: z.string(),
        title: z.string(),
        description: z.string(),
        href: z.string(),
        order: z.number().int(),
        visible: z.boolean().default(true),
      }),
    ),
  }),
});
