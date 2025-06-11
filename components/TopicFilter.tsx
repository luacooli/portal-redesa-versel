import Link from 'next/link'
import { topics } from '@/lib/constants/topics'

export default function TopicFilter({
  citySlug,
  activeTopic
}: {
  citySlug: string
  activeTopic?: string
}) {
  return (
    <nav className="flex gap-3 mb-6">
      {topics.map(topic => (
        <Link
          key={topic.slug}
          href={`/cidade/${citySlug}/${topic.slug}`}
          className={`text-sm px-3 py-1 rounded-full ${activeTopic === topic.slug
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
            }`}
        >
          {topic.label}
        </Link>
      ))}
    </nav>
  )
}
