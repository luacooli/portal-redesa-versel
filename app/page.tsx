import { allPosts } from 'contentlayer/generated'

import CityNavbar from '@/components/CityNavbar'
import PostCard from '@/components/PostCard'
import WeatherWidget from '@/components/WeatherWidget'
import { RadioSection } from '@/components/RadioSection'
import { Ad } from '@/components/Ad'
import { CTA } from '@/components/CTA'

export default function HomePage() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Sidebar - Clima (geral) */}
      <aside className="lg:col-span-1 mb-8 lg:mb-0">
        <WeatherWidget />
      </aside>

      {/* Conteúdo Principal */}
      <section className="lg:col-span-3">
        {/* Navbar das cidades */}
        <CityNavbar />

        {/* Logo centralizada */}
        <div className="flex justify-center my-6">
          <img
            src="/images/REDESA.png"
            alt="Mapa das 13 cidades"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>

        {/* Lista de matérias */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedPosts.map(post => (
            <PostCard key={post._id} post={post} showImg={false} />
          ))}
        </section>

        {/* Nova seção de interação */}
        <CTA />

        {/* Seção da Rádio */}
        <RadioSection />
      </section>

      {/* <Ad
        size="medium"
        title="Voe de asadeltas"
        imageSrc="/images/ads/pedra-grande.jpg"
        description="add da home"
        buttonText="Saiba mais"
        link="https://www.atibaiaturismo.com.br/"
      /> */}
    </main>
  )
}
