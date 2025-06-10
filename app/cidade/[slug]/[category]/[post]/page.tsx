// app/cidade/[slug]/[category]/[post]/page.tsx
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

export default function PostPage({ params }: { params: { slug: string, category: string, post: string } }) {
  const { slug: citySlug, category, post: postSlug } = params

  const post = allPosts.find(
    p =>
      p._raw.flattenedPath === `posts/${postSlug}` &&
      p.city?.toLowerCase().replace(/\s+/g, '-') === citySlug &&
      p.topic?.toLowerCase().replace(/\s+/g, '-') === category
  )

  if (!post) return notFound()

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      {/* <div dangerouslySetInnerHTML={{ __html: post.body.html }} /> */}
    </article>
  )
}
