import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const reelCollection = defineCollection({
  loader: glob({
    base: './src/entities/reel/content',
    pattern: '**/*.json',
  }),
  schema: z.object({
    items: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        url: z.url(),
        cover: z.string().optional(),
        order: z.number().int(),
        visible: z.boolean().default(true),
      }),
    ),
  }),
});
