'use client'

import Link from 'next/link'
import { colors } from '@/lib/constants/colors'

export function TopHeader() {
  return (
    <header
      className="w-full fixed top-0 left-0 z-50 shadow-sm border-b border-gray-200"
      style={{ backgroundColor: colors.neutralLight }}
    >
      <nav className="max-w-7xl mx-auto flex justify-center items-center px-4 py-3 text-sm font-medium text-gray-700">
        <div className="flex gap-6">
          <Link
            href="/"
            className={`transition-colors duration-200 hover:text-[color:var(--primary-color)] hover:bg-[${colors.primary}] hover:scale-105`}
          >
            🗺️ Cidades
          </Link>

          <Link
            href="/guia"
            className={`transition-colors duration-200 hover:text-[${colors.secondary}] hover:scale-105`}
          >
            📍 Guia Turístico
          </Link>

          <a
            href="https://www.radioesa.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-200 hover:text-[${colors.highlight}] hover:scale-105`}
          >
            📻 Rádio
          </a>
        </div>
      </nav>
    </header>
  )
}
