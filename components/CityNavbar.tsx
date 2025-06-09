import Link from 'next/link'

const cities = [
  'Amparo', 'Serra Negra', 'Águas de Lindóia', 'Lindóia',
  'Monte Alegre do Sul', 'Jaguariúna', 'Holambra',
  'Pedreira', 'Morungaba', 'Socorro', 'Pinhalzinho',
  'Tuiuti', 'Bom Jesus dos Perdões'
]

export default function CityNavbar() {
  return (
    <nav className="flex flex-wrap justify-center gap-2">
      {cities.map(city => (
        <Link
          key={city}
          href={`/cidade/${city.toLowerCase().replace(/\s+/g, '-')}`}
          className="bg-blue-100 px-3 py-1 rounded hover:bg-blue-200 text-sm"
        >
          {city}
        </Link>
      ))}
    </nav>
  )
}
