'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaAndroid, FaApple, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa'
import { colors } from '@/lib/constants/colors'

export function Footer() {
  const [form, setForm] = useState({ name: '', email: '', subject: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementa envio real (API route, serviço de e-mail, etc)
    console.log('Contato:', form)
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '' })
  }

  return (
    <footer className="bg-[#004F60] py-10 text-white">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Rede Entre Serras e Águas</h2>
          <p className="text-sm leading-relaxed">
            Portal de notícias da região, conectando cultura, lazer, gastronomia e esporte
            das 13 cidades entre serras e águas. Fique por dentro de tudo!
          </p>
        </div>

        {/* Column 2: Contato Rápido */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Contato Rápido</h3>
          {submitted ? (
            <p className="text-green-600">Mensagem enviada com sucesso! 😊</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-1" htmlFor="name">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-secondary"
                />
              </div>

              <div>
                <label className="block text-sm mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-secondary"
                />
              </div>

              <div>
                <label className="block text-sm mb-1" htmlFor="subject">
                  Assunto
                </label>
                <textarea
                  name="subject"
                  id="subject"
                  rows={3}
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-secondary"
                />
              </div>

              <button
                type="submit"
                className="px-5 py-2 bg-secondary font-medium rounded hover:opacity-90 transition"
              >
                Enviar
              </button>
            </form>
          )}
        </div>

        {/* Column 3: Social media + Download */}
        <div className='flex flex-col justify-around items-center'>
          {/* Redes Sociais */}
          <div className="max-w-5xl mx-auto px-4 mt-8">
            <h3 className="text-lg font-semibold text-center mb-2">Redes Sociais</h3>
            <hr className="border-gray-300 mb-4" />
            <div className="flex justify-center space-x-6">
              <Link
                href="https://www.instagram.com/seu_perfil"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <FaInstagram size={24} color={colors.tertiary} />
              </Link>
              <Link
                href="https://www.facebook.com/seu_perfil"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <FaFacebookF size={24} color={colors.primary} />
              </Link>
              <Link
                href="https://www.youtube.com/seu_canal"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <FaYoutube size={24} color={colors.highlight} />
              </Link>
            </div>
          </div>

          {/* Download App */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-lg font-semibold mb-2">Baixe o App</h3>
            <div className="flex space-x-4">
              <Link
                href="https://play.google.com/store/apps/details?id=br.com.radioesa"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <FaAndroid size={24} color={colors.primary} />
              </Link>
              <Link
                href="https://apps.apple.com/us/app/r%C3%A1dio-esa/id6747361627"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <FaApple size={24} color={colors.primary} />
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className="mt-8 text-center text-xs">
        © {new Date().getFullYear()} Rede Entre Serras e Águas. Todos os direitos
        reservados.
      </div>
    </footer>
  )
}
