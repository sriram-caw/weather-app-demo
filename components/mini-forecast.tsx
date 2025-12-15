"use client"

import { format } from "date-fns"
import { getWeatherInfo } from "@/lib/weather-codes"

interface MiniForecastProps {
  daily: {
    time: string[]
    weather_code: number[]
    temperature_2m_max: number[]
    temperature_2m_min: number[]
  }
}

export default function MiniForecast({ daily }: MiniForecastProps) {
  // Take next 7 days (skipping today if preferred, or including it. Usually forecast includes today)
  const forecastDays = daily.time.map((time, index) => ({
    date: time,
    code: daily.weather_code[index],
    maxTemp: daily.temperature_2m_max[index],
    minTemp: daily.temperature_2m_min[index],
  })).slice(0, 7)

  return (
    <div className="w-full h-full flex flex-col">
      <h3 className="text-white/50 text-xs font-bold tracking-widest uppercase mb-6">7-Day Forecast</h3>
      
      <div className="flex-1 flex flex-col gap-1 overflow-y-auto pr-2">
        {forecastDays.map((day, index) => {
          const { text, icon: WeatherIcon } = getWeatherInfo(day.code)
          const dateObj = new Date(day.date)
          
          return (
            <div 
              key={day.date} 
              className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-colors group cursor-default"
            >
              <span className={`text-sm font-medium w-16 ${index === 0 ? "text-white" : "text-white/60"}`}>
                {index === 0 ? "Today" : format(dateObj, "EEE")}
              </span>
              
              <div className="flex items-center gap-3 flex-1 justify-center">
                <WeatherIcon className="w-6 h-6 text-white" />
                <span className="text-xs text-white/40 font-medium hidden sm:block w-16 text-center">{text}</span>
              </div>

              <div className="flex items-center gap-1 w-16 justify-end">
                <span className="text-white font-bold">{Math.round(day.maxTemp)}°</span>
                <span className="text-white/40 text-sm">/ {Math.round(day.minTemp)}°</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}