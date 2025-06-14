import { cities } from '@/lib/constants/cities'
import Link from 'next/link'
import { colors } from '@/lib/constants/colors'

export default function CityNavbar() {
  const sortedCities = [...cities].sort((a, b) => a.name.localeCompare(b.name))

  return (
    <nav className="flex flex-wrap justify-center gap-3 mt-4">
      {sortedCities.map(city => (
        <Link
          key={city.slug}
          href={`/cidade/${city.slug}`}
          className={`px-4 py-2 text-sm rounded-full border transition-all duration-200
            text-gray-700 hover:text-[#0077A3]
            border-[${colors.secondary}]
            hover:bg-[${colors.secondary}]
          `}
        >
          {city.name}
        </Link>
      ))}
    </nav>
  )
}
