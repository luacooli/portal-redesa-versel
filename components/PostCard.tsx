import { Post } from 'contentlayer/generated'
import Link from 'next/link'
import { parseISO, format } from 'date-fns'

export default function PostCard({ post }: { post: Post }) {
  const excerpt = post.body.raw.substring(0, 200) + '...'

  return (
    <article>
      <h2 className="text-xl font-semibold mb-1">
        <Link href={post.url} className="text-blue-700 hover:underline">
          {post.title}
        </Link>
      </h2>
      <time className="text-sm text-gray-500 block mb-1">
        {format(parseISO(post.date), 'MMMM dd, yyyy')}
      </time>
      <p className="text-sm text-gray-700">{excerpt}</p>
    </article>
  )
}
