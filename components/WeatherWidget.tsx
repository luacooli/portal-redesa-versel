'use client'

import { useEffect, useState } from 'react'

type WeatherData = {
  temp: number
  description: string
  icon: string
  humidity: number
  wind: number
  feelsLike: number
  minTemp: number
  maxTemp: number
}

export default function WeatherWidget({ city = 'Atibaia' }: { city?: string }) {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_KEY

  useEffect(() => {
    async function fetchWeather() {
      if (!city) return

      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=${apiKey}&units=metric&lang=pt_br`

        const res = await fetch(url)
        const data = await res.json()

        if (res.ok) {
          const weatherInfo: WeatherData = {
            temp: Math.round(data.main.temp),
            description: data.weather[0].description,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            humidity: data.main.humidity,
            wind: data.wind.speed,
            feelsLike: Math.round(data.main.feels_like),
            minTemp: Math.round(data.main.temp_min),
            maxTemp: Math.round(data.main.temp_max)
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
  }, [city])

  if (loading) return <p className="text-gray-500">Carregando clima...</p>
  if (!weather) return <p className="text-gray-500">Clima não disponível</p>

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-5 shadow-md w-full max-w-sm mx-auto">
      <div className="flex items-center gap-4">
        <img src={weather.icon} alt="Ícone do clima" className="w-16 h-16" />

        <div>
          <p className="text-3xl font-bold text-blue-700">{weather.temp}°C</p>
          <p className="text-sm text-gray-600 capitalize">{weather.description}</p>
          <p className="text-xs text-gray-500">Sensação: {weather.feelsLike}°C</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-gray-600">
        <div className="flex flex-col">
          <span className="font-semibold">Mínima</span>
          <span>{weather.minTemp}°C</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">Máxima</span>
          <span>{weather.maxTemp}°C</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">Umidade</span>
          <span>{weather.humidity}%</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">Vento</span>
          <span>{weather.wind} km/h</span>
        </div>
      </div>
    </div>
  )
}
