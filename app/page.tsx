import CityNavbar from '@/components/CityNavbar'
import PostCard from '@/components/PostCard'
import { allPosts } from 'contentlayer/generated'

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-center mb-6">
        <img src="/images/logo/REDESA.png" alt="Mapa das 13 cidades" width={500} />
      </div>

      <CityNavbar />

      <section className="mt-8 space-y-6">
        {allPosts.map(post => (
          <PostCard key={post._id} post={post} />
        ))}
      </section>
    </main>
  )
}