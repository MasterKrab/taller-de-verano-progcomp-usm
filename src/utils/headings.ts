export interface Heading {
  depth: number
  slug: string
  text: string
}

export interface NormalizedHeading {
  text: string
  slug: string
  items: NormalizedHeading[]
}

export const normalizeHeadings = (headings: Heading[]) => {
  const build = (items: Heading[], depth: number) => {
    const result: NormalizedHeading[] = []

    while (items.length > 0) {
      const heading = items[0]

      if (heading.depth < depth) break

      if (heading.depth === depth) {
        result.push({ text: heading.text, slug: heading.slug, items: [] })
        items.shift()
        continue
      }

      const children = build(items, depth + 1)

      if (result.length > 0) result[result.length - 1].items = children
    }
    return result
  }

  return build(headings, 1)
}
