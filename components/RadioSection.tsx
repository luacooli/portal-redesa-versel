'use client'

import Link from 'next/link'
import { FaBroadcastTower } from 'react-icons/fa'
import { colors } from '@/lib/constants/colors'

export function RadioSection() {
  return (
    <section className="my-8">
      <div
        className="rounded-xl p-6 flex flex-col md:flex-row items-center justify-between shadow-md hover:shadow-lg transition-shadow"
        style={{ backgroundColor: colors.highlight }}
      >
        {/* Ícone + Texto */}
        <div className="flex items-center space-x-4">
          <FaBroadcastTower size={32} color="#fff" />
          <div>
            <h2 className="text-2xl font-bold text-white">
              Sintonize a Rádio ESA
            </h2>
            <p className="mt-1 text-sm text-white/90">
              Notícias, música e entretenimento 24/7
            </p>
          </div>
        </div>

        {/* Botão */}
        <Link
          href="https://www.radioesa.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 md:mt-0"
        >
          <span
            className="inline-block px-5 py-2 font-semibold rounded transition-colors duration-200"
            style={{
              backgroundColor: '#fff',
              color: colors.highlight
            }}
          >
            Ouça Agora
          </span>
        </Link>
      </div>
    </section>
  )
}
