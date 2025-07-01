import Link from 'next/link'
import { topics } from '@/lib/constants/topics'
import { colors } from '@/lib/constants/colors'

export default function TopicFilter({
  citySlug,
  activeTopic
}: {
  citySlug: string
  activeTopic?: string
}) {
  return (
    <nav className="flex flex-wrap justify-center gap-3 mb-6">
      {topics.map(topic => {
        const isActive = activeTopic === topic.slug
        return (
          <Link
            key={topic.slug}
            href={`/cidade/${citySlug}/${topic.slug}`}
            className={`
              px-4 py-2 text-sm 
              text-gray-700 
              border-b-2 border-[#004F60]
              transition-shadow duration-200 
              hover:shadow-md 
            `}
          >
            {topic.label}
          </Link>
        )
      })}
    </nav>
  )
}
