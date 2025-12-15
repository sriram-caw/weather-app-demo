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
    <div className="w-20 bg-[#C48B2C] flex flex-col items-center py-6">
      <div className="mb-8">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-6">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`p-3 rounded-lg transition-colors ${
                activeTab === item.id
                  ? "bg-white/20 text-white"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
              title={item.label}
            >
              <Icon className="w-5 h-5" />
            </button>
          )
        })}
      </nav>
    </div>
  )
}