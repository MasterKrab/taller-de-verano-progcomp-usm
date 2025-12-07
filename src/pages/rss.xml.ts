import { getCollection } from 'astro:content'
import rss from '@astrojs/rss'
import { SITE_DESCRIPTION, SITE_TITLE } from '@constants/metadata'
// import type { APIContext } from 'astro'

export async function GET(/*: {} APIContext */) {
  const posts = await getCollection('posts')

  if (!import.meta.env.SITE_URL)
    throw new Error('SITE_URL environment variable is not set')

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: import.meta.env.SITE_URL,
    items: posts.map((post) => ({
      ...post.data,
      link: `/posts/${post.id}/`,
    })),
  })
}
