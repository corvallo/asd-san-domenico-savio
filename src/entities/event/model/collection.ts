import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const eventCollection = defineCollection({
  loader: glob({
    base: './src/entities/event/content',
    pattern: '**/*.json',
  }),
  schema: z.object({
    items: z.array(
      z.object({
        id: z.string(),
        date: z.string(),
        title: z.string(),
        place: z.string(),
        href: z.string(),
        description: z.string(),
        order: z.number().int(),
        visible: z.boolean().default(true),
      }),
    ),
  }),
});
