"use client"

import { useState } from "react"
import { Cloud, MapPin, Settings, User } from "lucide-react"

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("weather")

  const navItems = [
    { id: "weather", icon: Cloud, label: "Weather" },
    { id: "explore", icon: MapPin, label: "Explore" },
    { id: "cities", icon: MapPin, label: "Cities" },
    { id: "settings", icon: Settings, label: "Settings" },
  ]

  return (
    <div className="w-20 bg-[#C48B2C] flex flex-col items-center py-8 h-full border-r border-white/10">
      <div className="mb-10">
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shadow-sm">
          <User className="w-6 h-6 text-white" />
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-8 w-full px-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`p-3 rounded-xl transition-all duration-200 flex justify-center ${
                isActive
                  ? "bg-white text-[#D69E36] shadow-md translate-y-[-1px]"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
              title={item.label}
            >
              <Icon className="w-6 h-6" />
            </button>
          )
        })}
      </nav>
    </div>
  )
}