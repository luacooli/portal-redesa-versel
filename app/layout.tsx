'use client'

import '../styles/globals.css'
import { Header } from '../components/Header'
import TopicFilter from '@/components/TopicFilter'
import WeatherCard from '@/components/WeatherWidget'
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
      <body className="bg-gray-50 text-gray-900 font-sans">
        <Header />

        <main className="max-w-5xl mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row gap-8">
          {/* Coluna esquerda - Clima */}
          <aside className="md:w-2/4">
            <WeatherCard city={citySlug} />
          </aside>

          <div>
            {/* Tópicos visíveis somente nas páginas de cidade */}
            {citySlug && (
              <div className="mb-8">
                <TopicFilter citySlug={citySlug} activeTopic={topicSlug} />
              </div>
            )}

            <div className="">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
