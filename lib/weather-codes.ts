import { Sun, Cloud, CloudRain, CloudSnow, CloudFog, CloudLightning, type LucideIcon } from "lucide-react"

export const WEATHER_CODE_MAP: Record<number, { text: string; icon: LucideIcon }> = {
  0: { text: "Sunny", icon: Sun },
  1: { text: "Cloudy", icon: Cloud },
  2: { text: "Cloudy", icon: Cloud },
  3: { text: "Cloudy", icon: Cloud },
  45: { text: "Foggy", icon: CloudFog },
  48: { text: "Foggy", icon: CloudFog },
  51: { text: "Drizzle", icon: CloudRain },
  53: { text: "Drizzle", icon: CloudRain },
  55: { text: "Drizzle", icon: CloudRain },
  61: { text: "Rainy", icon: CloudRain },
  63: { text: "Rainy", icon: CloudRain },
  65: { text: "Rainy", icon: CloudRain },
  71: { text: "Snowy", icon: CloudSnow },
  73: { text: "Snowy", icon: CloudSnow },
  75: { text: "Snowy", icon: CloudSnow },
  80: { text: "Showers", icon: CloudRain },
  81: { text: "Showers", icon: CloudRain },
  82: { text: "Showers", icon: CloudRain },
  95: { text: "Storm", icon: CloudLightning },
  96: { text: "Storm", icon: CloudLightning },
  99: { text: "Storm", icon: CloudLightning },
}

export const getWeatherInfo = (code: number) => {
  return WEATHER_CODE_MAP[code] || { text: "Unknown", icon: Cloud }
}