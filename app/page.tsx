import CityNavbar from '@/components/CityNavbar'
import PostCard from '@/components/PostCard'
import { allPosts } from 'contentlayer/generated'

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Rede Entre Serras e Águas
      </h1>

      <CityNavbar />

      <section className="mt-8 space-y-6">
        {allPosts.map(post => (
          <PostCard key={post._id} post={post} />
        ))}
      </section>
    </main>
  )
}
