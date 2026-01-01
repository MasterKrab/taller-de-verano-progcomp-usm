import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const posts = defineCollection({
  // Load Markdown and MDX files in the `src/content/posts/` directory.
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      publicationDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
    }),
})

const problems = defineCollection({
  loader: glob({ base: './src/content/problems', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    timeLimit: z.string(),
    memoryLimit: z.string(),
  }),
})

export const collections = { posts, problems }
