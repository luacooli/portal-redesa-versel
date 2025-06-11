import { allPosts } from 'contentlayer/generated'
import Link from 'next/link';

export default function CategoryPage({
  params
}: {
  params: { slug: string; category: string }
}) {
  const posts = allPosts
    .filter(p => p.citySlug === params.slug && p.topicSlug === params.category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div>
      <h1>{params.category} em {params.slug}</h1>
      {posts.map(post => (
        <Link key={post.slug} href={`/cidade/${post.citySlug}/${post.topicSlug}/${post.slug}`}>
          {post.title}
        </Link>
      ))}
    </div>
  )
}
