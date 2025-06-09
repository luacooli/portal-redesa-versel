import { allPosts } from 'contentlayer/generated'
import PostCard from '@/components/PostCard'

export default function CityCategoryPage({ params }: { params: { slug: string; category: string } }) {
  const city = decodeURIComponent(params.slug)
  const category = decodeURIComponent(params.category)

  const posts = allPosts.filter(
    post =>
      post.city?.toLowerCase() === city.toLowerCase() &&
      post.topic?.toLowerCase() === category.toLowerCase()
  )

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-xl font-semibold text-center mt-6 mb-4">
        {category.charAt(0).toUpperCase() + category.slice(1)} em {city}
      </h1>

      <section className="space-y-6">
        {posts.map(post => (
          <PostCard key={post._id} post={post} />
        ))}
        {posts.length === 0 && (
          <p className="text-gray-500 text-center">Nenhuma matéria encontrada.</p>
        )}
      </section>
    </main>
  )
}
