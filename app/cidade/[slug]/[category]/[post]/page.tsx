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
    <article>
      <h1>{post.title}</h1>
      {post.image && <img src={post.image} alt={post.title} />}
      <p>{post.description}</p>
      {/* <div dangerouslySetInnerHTML={{ __html: post.body.html }} /> */}
      <MDXContent />

      {post.youtubeUrl && (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${post.youtubeUrl.split('v=')[1]}`}
          title="YouTube video player"
          allowFullScreen
          className="w-full h-64 mt-4"
        />
      )}
    </article>
  )
}
