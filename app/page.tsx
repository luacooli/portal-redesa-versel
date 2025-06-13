import { allPosts } from 'contentlayer/generated'

import CityNavbar from '@/components/CityNavbar'
import PostCard from '@/components/PostCard'
import WeatherWidget from '@/components/WeatherWidget'

export default function HomePage() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
      <aside className="lg:col-span-1">
        <h2 className="font-semibold text-lg mb-4">Previsão do Tempo</h2>
        <WeatherWidget />
      </aside>

      <section className="lg:col-span-3">
        <CityNavbar />
        <div className="flex justify-center mb-6">
          <img src="/images/logo/REDESA.png" alt="Mapa das 13 cidades" width={500} />
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {sortedPosts.map(post => (
            <PostCard key={post._id} post={post} showImg={false} />
          ))}
        </section>
      </section>
    </main>
  )
}