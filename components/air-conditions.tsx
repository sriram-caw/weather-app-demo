"use client"

import { Thermometer, Wind, Droplets, Sun } from "lucide-react"

interface AirConditionsProps {
  current: {
    apparent_temperature: number
    wind_speed_10m: number
  }
  daily: {
    uv_index_max: number[]
    precipitation_probability_max: number[]
  }
}

export default function AirConditions({ current, daily }: AirConditionsProps) {
  const items = [
    {
      id: "real-feel",
      label: "Real Feel",
      value: `${Math.round(current.apparent_temperature)}°`,
      icon: Thermometer,
    },
    {
      id: "wind",
      label: "Wind",
      value: `${current.wind_speed_10m} km/h`,
      icon: Wind,
    },
    {
      id: "rain",
      label: "Chance of Rain",
      value: `${daily.precipitation_probability_max[0]}%`,
      icon: Droplets,
    },
    {
      id: "uv",
      label: "UV Index",
      value: daily.uv_index_max[0].toString(),
      icon: Sun,
    },
  ]

  return (
    <div className="w-full space-y-4">
      <h3 className="text-white/50 text-xs font-bold tracking-widest uppercase ml-1">Air Conditions</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.id} className="bg-white/10 border border-white/10 rounded-2xl p-4 flex flex-col justify-between h-[100px] hover:bg-white/15 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2 text-white/70">
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              </div>
              
              <div>
                <span className="text-2xl font-bold text-white">{item.value}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}