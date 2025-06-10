import { Post } from 'contentlayer/generated'
import Link from 'next/link'
import { parseISO, format } from 'date-fns'

type PostCardProps = {
  post: {
    title: string
    city: string
    slug: string
    topic?: string
  }
}

export default function PostCard({ post }: { post: Post }) {
  const excerpt = post.body.raw.substring(0, 200) + '...'

  return (
    <article>
      <h2 className="text-xl font-semibold mb-1">
        <Link href={`/cidade/${post.citySlug}/${post.topicSlug}/${post.slug}`} className="text-blue-700 hover:underline">
          {post.title}
        </Link>
      </h2>
      <div>
        <time className="text-sm text-gray-500 block mb-1">
          {format(parseISO(post.date), 'MMMM dd, yyyy')}
        </time>
        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
          {post.city?.toLowerCase().replace(/\s+/g, '-')}
        </span>
      </div>
      <p className="text-sm text-gray-700">{excerpt}</p>
    </article>
  )
}
