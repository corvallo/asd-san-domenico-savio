import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const navigationCollection = defineCollection({
  loader: glob({
    base: './src/entities/navigation/content',
    pattern: '**/*.json',
  }),
  schema: z.object({
    items: z.array(
      z.object({
        label: z.string(),
        href: z.string(),
        order: z.number().int(),
        visible: z.boolean().default(true),
        external: z.boolean().default(false),
      }),
    ),
  }),
});
