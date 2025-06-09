import Link from 'next/link'

const topics = ['sports', 'leisure', 'food', 'culture']

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
          key={topic}
          href={`/city/${citySlug}?topic=${topic}`}
          className={`text-sm px-3 py-1 rounded-full ${activeTopic === topic
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
            }`}
        >
          {topic}
        </Link>
      ))}
    </nav>
  )
}
