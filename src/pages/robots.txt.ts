import type { APIRoute } from 'astro'

const getRobotsTxt = (sitemapURL: URL) => `\
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`

export const GET: APIRoute = () => {
  if (!import.meta.env.SITE_URL)
    throw new Error('SITE_URL environment variable is not set')

  const sitemapURL = new URL('sitemap-index.xml', import.meta.env.SITE_URL)
  return new Response(getRobotsTxt(sitemapURL), {
    headers: { 'Content-Type': 'text/plain' },
  })
}
