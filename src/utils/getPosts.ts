import { getCollection } from 'astro:content'

const getPosts = async (take = Infinity) => {
  const allPosts = (await getCollection('posts')).sort(
    (a, b) =>
      b.data.publicationDate.valueOf() - a.data.publicationDate.valueOf(),
  )

  if (take !== Infinity) return allPosts.slice(0, take)

  return allPosts
}

export default getPosts
