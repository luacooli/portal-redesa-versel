import { allPosts } from 'contentlayer/generated'
import PostCard from '@/components/PostCard'
// import { cities } from '@/lib/constants/cities'  // array de { slug, name }

// export async function generateStaticParams() {
//   return cities.map(city => ({ slug: city.slug }))
// }

export default async function CityPage({
  params,
  searchParams
}: {
  params: { slug: string }
  searchParams: { topic?: string }
}) {
  const city = params.slug.replace(/-/g, ' ')
  const topic = searchParams.topic


  const posts = allPosts
    .filter(post => post.citySlug === params.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <main className="max-w-6xl py-8">
      <h2 className="text-2xl font-bold mb-6 capitalize">
        Notícias de {city}
      </h2>

      <div className="flex flex-col md:flex-row gap-8 space-y-2">

        {/* Coluna direita - Posts */}
        <section className="md:w-3/4 space-y-6">
          {posts.length > 0 ? (
            posts.map(post => (
              <PostCard key={post._id} post={post} />
            ))
          ) : (
            <p className="text-gray-500">Nenhum artigo encontrado.</p>
          )}
        </section>
      </div>
    </main>
  )
}
