import axios from "axios"
import { WeatherResponse } from "@/types/weather"

export async function getWeather(latitude: number, longitude: number): Promise<WeatherResponse> {
  const params = new URLSearchParams({
    latitude: latitude.toString(),
    longitude: longitude.toString(),
    current: "temperature_2m,weather_code,wind_speed_10m,apparent_temperature",
    hourly: "temperature_2m,weather_code",
    daily: "weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max",
    timezone: "auto",
  })

  const response = await axios.get(`https://api.open-meteo.com/v1/forecast?${params}`)
  
  return response.data
}