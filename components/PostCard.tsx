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
}

export default function PostCard({ post }: { post: Post }) {
  const formattedDate = format(new Date(post.date), "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR
  })

  return (
    <Link href={`/materia/${post.slug}`}>
      <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
        {post.image && (
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

          {post.summary && (
            <p className="text-sm text-gray-600 line-clamp-3">{post.summary}</p>
          )}
        </div>
      </article>
    </Link>
  )
}
