import Link from 'next/link'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

type Post = {
  _id: string
  slug: string
  title: string
  date: string
  summary?: string
  image?: string
  citySlug: string
  topicSlug: string
  topic?: string
}

export default function PostCard({
  post,
  showImg = true,
  showTopicBadge = true
}: {
  post: Post
  showImg?: boolean
  showTopicBadge?: boolean
}) {
  const formattedDate = format(new Date(post.date), "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR
  })

  return (
    <div>
      <Link href={`/cidade/${post.citySlug}/${post.topicSlug}/${post.slug}`}>
        <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
          {post.image && showImg && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
          )}

          <div className="p-4 space-y-2">
            <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
              {post.title}
            </h2>

            <p className="text-sm text-gray-500">{formattedDate}</p>

            {/* Badge de tópico (só se showTopicBadge for true) */}
            {showTopicBadge && post.topic && (
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                {post.topic.toUpperCase()}
              </span>
            )}

            {post.summary && (
              <p className="text-sm text-gray-600 line-clamp-3">{post.summary}</p>
            )}
          </div>
        </article>
      </Link>
    </div>
  )
}
