"use client"

import { useRef } from "react"
import { Footprints, Tent, Waves, Bike } from "lucide-react"

interface ActivityCarouselProps {
  temperature: number
}

export default function ActivityCarousel({ temperature }: ActivityCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Logic for activity suggestions
  const getActivities = (temp: number) => {
    if (temp > 25) {
      return [
        { id: 1, title: "Swimming", distance: "2km away", icon: Waves, color: "bg-blue-200" },
        { id: 2, title: "Cycling", distance: "5km away", icon: Bike, color: "bg-green-200" },
        { id: 3, title: "Hiking", distance: "12km away", icon: Footprints, color: "bg-emerald-200" },
        { id: 4, title: "Camping", distance: "25km away", icon: Tent, color: "bg-orange-200" },
      ]
    } else if (temp < 10) {
      return [
        { id: 1, title: "Hiking", distance: "12km away", icon: Footprints, color: "bg-emerald-200" },
        { id: 2, title: "Camping", distance: "25km away", icon: Tent, color: "bg-orange-200" },
        { id: 3, title: "Cycling", distance: "5km away", icon: Bike, color: "bg-green-200" },
      ]
    } else {
      return [
        { id: 1, title: "Cycling", distance: "5km away", icon: Bike, color: "bg-green-200" },
        { id: 2, title: "Hiking", distance: "12km away", icon: Footprints, color: "bg-emerald-200" },
        { id: 3, title: "Camping", distance: "25km away", icon: Tent, color: "bg-orange-200" },
        { id: 4, title: "Swimming", distance: "2km away", icon: Waves, color: "bg-blue-200" },
      ]
    }
  }

  const activities = getActivities(temperature)

  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-center px-1">
        <h3 className="text-white text-xl font-medium">Activities in your area</h3>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {activities.map((activity) => {
            const Icon = activity.icon
            return (
                <div 
                  key={activity.id} 
                  className="min-w-[180px] snap-start cursor-pointer group"
                >
                  {/* Image Container (Top) */}
                  <div className={`h-[110px] w-full rounded-[10px] ${activity.color} relative flex items-center justify-center mb-2 overflow-hidden`}>
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                     <Icon className="w-8 h-8 text-black/50" />
                  </div>

                  {/* Text Container (Bottom) */}
                  <div className="space-y-0.5 px-1">
                     <p className="text-white font-medium text-sm">{activity.title}</p>
                     <p className="text-white/70 text-xs">{activity.distance}</p>
                  </div>
                </div>
            )
        })}
      </div>
    </div>
  )
}