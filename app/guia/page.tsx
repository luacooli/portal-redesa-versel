import CityNavbar from '@/components/CityNavbar'

export default function GuiaPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-center text-[color:var(--primary-color)]">
        Guia Turístico - Entre Serras e Águas
      </h1>

      <p className="text-gray-700 text-center max-w-2xl mx-auto">
        Descubra os melhores pontos turísticos, gastronomia, eventos culturais e opções de lazer das 13 cidades que formam a região Entre Serras e Águas de São Paulo.
      </p>

      {/* Conteúdo Principal */}
      <section className="lg:col-span-3">
        {/* Navbar das cidades */}
        <CityNavbar />

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-4 border border-gray-200 rounded shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="font-semibold text-lg mb-2 text-[color:var(--secondary-color)]">
              🌿 Natureza e Ecoturismo
            </h2>
            <p className="text-sm text-gray-600">
              Trilhas, cachoeiras, mirantes e reservas naturais para os amantes da natureza.
            </p>
          </div>

          <div className="p-4 border border-gray-200 rounded shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="font-semibold text-lg mb-2 text-[color:var(--secondary-color)]">
              🍴 Gastronomia Local
            </h2>
            <p className="text-sm text-gray-600">
              Conheça os sabores típicos da região: restaurantes, cafés, vinícolas e cervejarias.
            </p>
          </div>

          <div className="p-4 border border-gray-200 rounded shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="font-semibold text-lg mb-2 text-[color:var(--secondary-color)]">
              🎭 Cultura e Eventos
            </h2>
            <p className="text-sm text-gray-600">
              Festas tradicionais, feiras, apresentações culturais e outros eventos que movimentam a região.
            </p>
          </div>
        </section>
      </section>

      <p className="text-center text-sm text-gray-500 mt-8">
        Em breve, mais conteúdos detalhados sobre cada cidade!
      </p>
    </main>
  )
}
