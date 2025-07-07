// components/InteractionSection.tsx
'use client'

import Link from 'next/link'
import { colors } from '@/lib/constants/colors'
import { FaWhatsapp, FaCamera } from 'react-icons/fa'

export function CTA() {
  return (
    <section className="my-12 px-4">
      <div className="relative flex items-center overflow-hidden rounded-2xl bg-white shadow-lg">
        {/* Faixas laterais */}
        <div className="absolute left-0 top-0 h-full w-2" style={{ backgroundColor: colors.primary }} />
        <div className="absolute left-2 top-0 h-full w-2" style={{ backgroundColor: colors.secondary }} />

        <div className="ml-8 flex flex-col md:flex-row items-center justify-between w-full p-8">
          {/* Texto */}
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: colors.primary }}>
              Faça parte das atualizações da AtibaiaTV
            </h2>
            <p className="text-lg md:text-xl mb-4 text-gray-700">
              Aqui você tem espaço aberto. Tem algo acontecendo perto de você?
            </p>
            <p className="mb-6 text-gray-600">
              Grave um vídeo ou tire fotos do ocorrido e envie para a gente no WhatsApp:
            </p>

            {/* Botão WhatsApp */}
            <Link
              href="https://wa.me/5511913595555"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[color:var(--highlight-color)] px-2 py-3 rounded-full font-semibold transition-transform duration-200 hover:scale-105"
            >
              <FaWhatsapp size={20} /> (11) 91359-5555
            </Link>
          </div>

          {/* Ícone de filmar/fotografar */}
          <div className="mt-8 md:mt-0 flex-shrink-0">
            <FaCamera size={64} style={{ color: colors.secondary }} />
          </div>
        </div>
      </div>
    </section>
  )
}
