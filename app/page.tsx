import { allPosts } from 'contentlayer/generated'

import CityNavbar from '@/components/CityNavbar'
import PostCard from '@/components/PostCard'
import WeatherWidget from '@/components/WeatherWidget'

export default function HomePage() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <main className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
      <section className="lg:col-span-3">
        <CityNavbar />
        <div className="flex justify-center my-6">
          <img src="/images/logo/REDESA.png" alt="Mapa das 13 cidades" width={500} />
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {sortedPosts.map(post => (
            <PostCard key={post._id} post={post} showImg={false} />
          ))}
        </section>
      </section>
    </main>
  )
}