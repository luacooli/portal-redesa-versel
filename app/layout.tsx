'use client'

import '../styles/globals.css'
import { TopHeader } from '@/components/TopHeader'
import { Header } from '../components/Header'
import TopicFilter from '@/components/TopicFilter'
import WeatherWidget from '@/components/WeatherWidget'
import { usePathname } from 'next/navigation'
import React from 'react'

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

        <main className="max-w-6xl mx-auto px-4 md:px-6 pb-6 flex flex-col md:flex-row gap-8">
          {/* Sidebar - Clima (só aparece nas páginas de cidade) */}
          {citySlug && (
            <aside className="md:w-1/4">
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
        </main>
      </body>
    </html>
  )
}
