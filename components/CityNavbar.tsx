import { cities } from '@/lib/constants/cities'
import Link from 'next/link'

export default function CityNavbar() {
  const sortedCities = [...cities].sort((a, b) =>
    a.name.localeCompare(b.name)
  )

  return (
    <nav className="flex flex-wrap justify-center gap-2">
      {sortedCities.map(city => (
        <Link
          key={city.slug}
          href={`/cidade/${city.slug}`}
          className="bg-blue-100 px-3 py-1 rounded hover:bg-blue-200 text-sm"
        >
          {city.name}
        </Link>
      ))}
    </nav>
  )
}
