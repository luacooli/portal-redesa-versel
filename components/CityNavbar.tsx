import Link from 'next/link'
import { cities } from '@/lib/constants/cities'

export default function CityNavbar() {
  const sortedCities = [...cities].sort((a, b) => a.name.localeCompare(b.name))

  return (
    <nav className="flex flex-wrap justify-center gap-3 mt-4">
      {sortedCities.map(city => (
        <Link
          key={city.slug}
          href={`/cidade/${city.slug}`}
          className="flex items-center p-2 border rounded-md border-[#004F6077] shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <div>
            <span className="text-sm font-semibold text-[#004F60]">
              {city.name}
            </span>
          </div>
        </Link>
      ))}
    </nav>
  )
}
