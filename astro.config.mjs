// @ts-check

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.SITE_URL,
  integrations: [mdx(), sitemap(), icon()],
  prefetch: true,
})
