import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const pageCollection = defineCollection({
  loader: glob({
    base: './src/pages/_editorial/content',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    seo: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
        image: z.string().optional(),
        noindex: z.boolean().default(false),
      })
      .default({ noindex: false }),
  }),
});
