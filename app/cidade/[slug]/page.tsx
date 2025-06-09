import { allPosts } from 'contentlayer/generated'
import TopicFilter from '@/components/TopicFilter'
import PostCard from '@/components/PostCard'

export default function CityPage({
  params,
  searchParams
}: {
  params: { slug: string }
  searchParams: { topic?: string }
}) {
  const city = params.slug.replace(/-/g, ' ')
  const topic = searchParams.topic

  const posts = allPosts.filter(
    post =>
      post.city?.toLowerCase() === city.toLowerCase() &&
      (!topic || post.topic === topic)
  )

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 capitalize text-center">
        Notícias {city} 
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar de tópicos */}
        <aside className="md:w-1/4">
          <TopicFilter citySlug={params.slug} activeTopic={topic} />
        </aside>

        {/* Área de posts */}
        <section className="md:w-3/4 space-y-6">
          {posts.length > 0 ? (
            posts.map(post => (
              <PostCard key={post._id} post={post} />
            ))
          ) : (
            <p className="text-gray-500">Nenhum artigo encontrado.</p>
          )}
        </section>
      </div>
    </main>
  )
}
