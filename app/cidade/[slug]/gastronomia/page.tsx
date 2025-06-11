import { allPosts } from 'contentlayer/generated'
import PostCard from '@/components/PostCard'

export default function CulturaPage({
  params
}: {
  params: { slug: string }
}) {
  const city = params.slug.replace(/-/g, ' ')

  const posts = allPosts
    .filter(
      post =>
        post.city?.toLowerCase() === city.toLowerCase() &&
        post.topic === 'gastronomia'
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 capitalize">
        Gastronomia de {city}
      </h1>

      {posts.length === 0 ? (
        <p className="text-gray-500 text-lg">Nenhuma matéria de esporte encontrada.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </main>
  )
}
