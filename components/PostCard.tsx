import Link from 'next/link'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { topicColors } from '@/lib/constants/topicColors'

type Post = {
  _id: string
  slug: string
  title: string
  date: string
  summary?: string
  image?: string
  citySlug: string
  topicSlug: string
}

export default function PostCard({
  post,
  showImg = true
}: {
  post: Post
  showImg?: boolean
}) {
  const formattedDate = format(new Date(post.date), "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR
  })

  const topicLabel = post.topicSlug.charAt(0).toUpperCase() + post.topicSlug.slice(1)

  const topicColor = topicColors[post.topicSlug]

  return (
    <div>
      <Link href={`/cidade/${post.citySlug}/${post.topicSlug}/${post.slug}`}>
        <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-neutral-200">
          {post.image && showImg && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
          )}

          <div className="p-4 space-y-2">
            {/* Badge de tópico */}
            {topicColor && (
              <span
                className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${topicColor.text}`}
                style={{ backgroundColor: topicColor.bg }}
              >
                {topicLabel}
              </span>
            )}

            <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
              {post.title}
            </h2>

            <p className="text-sm text-gray-500">{formattedDate}</p>

            {post.summary && (
              <p className="text-sm text-gray-600 line-clamp-3">{post.summary}</p>
            )}
          </div>
        </article>
      </Link>
    </div>
  )
}
