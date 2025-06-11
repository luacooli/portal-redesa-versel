'use client'

import '../styles/globals.css'

import { Header } from '../components/Header'
import { topics } from '@/lib/constants/topics'

import { usePathname } from 'next/navigation'
import TopicFilter from '@/components/TopicFilter'
import Link from 'next/link'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Detecta se estamos em uma rota de cidade
  const pathname = usePathname()
  const match = pathname?.match(/^\/cidade\/([^\/]+)(\/([^\/]+))?/)
  const citySlug = match?.[1]
  const topicSlug = match?.[3]

  return (
    <html>
      <head>
        <title>Portal Rede Entre Serras e Águas</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </head>
      <body>
        <Header />

        {/* Filtro de tópicos visível apenas quando estiver em /cidade/[slug] */}
        {citySlug && (
          // <nav className="flex gap-2 px-6 py-4">
          //   {topics.map(topic => (
          //     <Link
          //       key={topic.slug}
          //       href={`/cidade/${citySlug}/${topic.slug}`}
          //       className={`text-sm px-3 py-1 rounded-full ${
          //         topicSlug === topic.slug
          //           ? 'bg-blue-600 text-white'
          //           : 'bg-gray-200 hover:bg-gray-300'
          //       }`}
          //     >
          //       {topic.label}
          //     </Link>
          //   ))}
          // </nav>
          <TopicFilter citySlug={citySlug} activeTopic={topicSlug} />

        )}

        <div className="px-6">{children}</div>
      </body>
    </html>
  )
}
