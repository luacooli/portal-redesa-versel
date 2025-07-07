'use client'

import React from 'react'
import '../styles/globals.css'
import { Footer } from '@/components/Footer'
import { Header } from '../components/Header'
import { TopHeader } from '@/components/TopHeader'
import TopicFilter from '@/components/TopicFilter'
import WeatherWidget from '@/components/WeatherWidget'
import { usePathname } from 'next/navigation'
import { Ad } from '@/components/Ad'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const match = pathname?.match(/^\/cidade\/([^\/]+)(\/([^\/]+))?/)
  const citySlug = match?.[1]
  const topicSlug = match?.[3]

  return (
    <html lang="pt-BR">
      <head>
        <title>Portal Rede Entre Serras e Águas</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </head>
      <body className="bg-background text-gray-900 font-sans">
        <TopHeader />

        <Header />

        <main className="mx-auto px-4 pb-6 flex flex-col md:flex-row gap-8">
        {/* <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-none gap-8"> */}
          {/* Sidebar - Clima (só aparece nas páginas de cidade) */}
          {citySlug && (
            <aside className="">
              <WeatherWidget city={citySlug.replace(/-/g, ' ')} />
            </aside>
          )}

          {/* Conteúdo principal */}
          <section className={`flex-1 ${citySlug ? '' : 'w-full'}`}>
            {/* Filtro de tópicos - só nas rotas de cidade */}
            {citySlug && (
              <div className="mb-6">
                <TopicFilter citySlug={citySlug} activeTopic={topicSlug} />
              </div>
            )}

            <div>{children}</div>
          </section>

          <Ad
            size="medium"
            title="Voe de asadeltas"
            imageSrc="/images/ads/pedra-grande.jpg"
            description="Ad - layout geral geral"
            buttonText="Saiba mais"
            link="https://www.atibaiaturismo.com.br/"
          />
        </main>

        <Footer />
      </body>
    </html>
  )
}
