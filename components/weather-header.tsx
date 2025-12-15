"use client"

import { format } from "date-fns"
import { MapPin } from "lucide-react"
import { getWeatherInfo } from "@/lib/weather-codes"

interface WeatherHeaderProps {
  current: {
    temperature_2m: number
    apparent_temperature: number
    weather_code: number
  }
}

export default function WeatherHeader({ current }: WeatherHeaderProps) {
  const { text, icon: WeatherIcon } = getWeatherInfo(current.weather_code)
  const today = new Date()

  return (
    <div className="flex justify-between items-start w-full">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-white/80 text-sm font-medium mb-4">
          <MapPin className="w-4 h-4" />
          <span>New York, USA</span>
        </div>
        
        <h2 className="text-white/60 text-lg font-medium">
          {format(today, "EEE | dd MMM yyyy")}
        </h2>
        
        <div className="flex items-center gap-4">
           <h1 className="text-8xl font-bold text-white tracking-tighter">
            {Math.round(current.temperature_2m)}&deg;
          </h1>
        </div>
        
        <div className="flex items-center gap-2 text-white/90 text-xl font-medium">
            <span>{text}</span>
            <span className="text-white/40">•</span>
            <span>Feels like {Math.round(current.apparent_temperature)}&deg;</span>
        </div>
      </div>

      <div className="bg-white/10 p-4 rounded-3xl backdrop-blur-sm border border-white/10">
        <WeatherIcon className="w-24 h-24 text-white drop-shadow-lg" strokeWidth={1.5} />
      </div>
    </div>
  )
}