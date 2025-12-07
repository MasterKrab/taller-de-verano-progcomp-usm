import { getCollection } from 'astro:content'
import rss from '@astrojs/rss'
import { SITE_DESCRIPTION, SITE_TITLE } from '@constants/metadata'
import type { APIContext } from 'astro'

export async function GET(context: APIContext) {
  const posts = await getCollection('posts')
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site as URL,
    items: posts.map((post) => ({
      ...post.data,
      link: `/posts/${post.id}/`,
    })),
  })
}
