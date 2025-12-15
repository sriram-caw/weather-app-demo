"use client"

import {
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts"
import { format } from "date-fns"

interface ForecastChartProps {
  hourly: {
    time: string[]
    temperature_2m: number[]
  }
}

export default function ForecastChart({ hourly }: ForecastChartProps) {
  // Take next 24 hours
  const data = hourly.time.slice(0, 24).map((time, index) => ({
    time: time,
    temp: hourly.temperature_2m[index],
  }))

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#C48B2C] border border-white/20 p-2 rounded-lg shadow-lg">
          <p className="text-white text-xs font-medium mb-1">
            {format(new Date(label), "h:mm a")}
          </p>
          <p className="text-white text-lg font-bold">
            {Math.round(payload[0].value)}°
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="w-full h-[250px] bg-white/10 border border-white/10 rounded-3xl p-6">
      <h3 className="text-white/50 text-xs font-bold tracking-widest uppercase mb-4">24-Hour Forecast</h3>
      
      <div className="h-[180px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.2)', strokeWidth: 2 }} />
            <XAxis 
              dataKey="time" 
              tickFormatter={(str) => format(new Date(str), "h a")}
              stroke="rgba(255,255,255,0.5)"
              tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              interval={3}
            />
            <Area
              type="monotone"
              dataKey="temp"
              stroke="#FFFFFF"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorTemp)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}