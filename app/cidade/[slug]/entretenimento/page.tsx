import { allPosts } from 'contentlayer/generated'
// import TopicFilter from '@/components/TopicFilter'
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
      post.topicSlug === 'entretenimento'
  )

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 capitalize">
        Entretenimento em {city}
      </h1>

      <section className="mt-6 space-y-6">
        {posts.map(post => (
          <PostCard key={post._id} post={post} />
        ))}
        {posts.length === 0 && (
          <p className="text-gray-500">No articles found.</p>
        )}
      </section>
    </main>
  )
}
