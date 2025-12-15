export interface WeatherResponse {
  current: CurrentWeather
  hourly: HourlyWeather
  daily: DailyWeather
}

export interface CurrentWeather {
  time: string
  temperature_2m: number
  apparent_temperature: number
  weather_code: number
  wind_speed_10m: number
}

export interface HourlyWeather {
  time: string[]
  temperature_2m: number[]
  weather_code: number[]
}

export interface DailyWeather {
  time: string[]
  weather_code: number[]
  temperature_2m_max: number[]
  temperature_2m_min: number[]
  uv_index_max: number[]
  precipitation_probability_max: number[]
}