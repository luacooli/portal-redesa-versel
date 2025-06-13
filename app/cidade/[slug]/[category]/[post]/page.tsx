import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'

export default function PostPage({
  params
}: {
  params: { slug: string; category: string; post: string }
}) {
  const post = allPosts.find(
    p =>
      p.citySlug === params.slug &&
      p.topicSlug === params.category &&
      p.slug === params.post
  )

  if (!post) return notFound()

  const MDXContent = useMDXComponent(post.body.code)

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Título */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        {post.title}
      </h1>

      {/* Descrição curta (opcional) */}
      {post.description && (
        <p className="text-lg text-gray-600 mb-6">{post.description}</p>
      )}

      {/* Imagem de capa */}
      {post.image && (
        <div className="rounded-xl overflow-hidden shadow-sm mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      )}

      {/* Conteúdo da notícia (MDX) */}
      <div className="prose prose-neutral prose-img:rounded-xl max-w-none prose-a:text-blue-600">
        <MDXContent />
      </div>

      {/* Vídeo do YouTube */}
      {post.youtubeUrl && (
        <div className="mt-8 aspect-video rounded-xl overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${post.youtubeUrl.split('v=')[1]}`}
            title="YouTube video player"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      )}
    </article>
  )
}
