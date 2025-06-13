'use client'

import { useEffect, useState } from 'react'

type WeatherData = {
  temp: number
  description: string
  icon: string
  humidity: number
  wind: number
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const apiKey = process.env.OPENWEATHER_KEY

  useEffect(() => {
    async function fetchWeather() {
      try {
        // const apiKey = '4f8bc566a4f5afc7b26071cccb16ccec'
        const city = 'Atibaia'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`

        const res = await fetch(url)
        const data = await res.json()

        if (res.ok) {
          const weatherInfo = {
            temp: Math.round(data.main.temp),
            description: data.weather[0].description,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
            humidity: data.main.humidity,
            wind: data.wind.speed
          }

          setWeather(weatherInfo)
        } else {
          console.error('Erro na API:', data.message)
        }

        setLoading(false)
      } catch (error) {
        console.error('Erro ao buscar clima:', error)
        setLoading(false)
      }
    }

    fetchWeather()
  }, [])

  if (loading) return <p>Carregando clima...</p>
  if (!weather) return <p>Clima não disponível</p>

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-sm space-y-2">
      <div className="flex items-center gap-3">
        <img src={weather.icon} alt="Ícone do clima" className="w-10 h-10" />
        <div>
          <p className="text-xl font-semibold">{weather.temp}°C</p>
          <p className="text-sm capitalize text-gray-600">{weather.description}</p>
        </div>
      </div>

      <div className="text-sm text-gray-700 space-y-1 mt-2">
        <p><strong>Umidade:</strong> {weather.humidity}%</p>
        <p><strong>Vento:</strong> {weather.wind} km/h</p>
      </div>
    </div>
  )
}
