import WeatherHeader from "@/components/weather-header"
import ActivityCarousel from "@/components/activity-carousel"
import AirConditions from "@/components/air-conditions"
import MiniForecast from "@/components/mini-forecast"
import ForecastChart from "@/components/forecast-chart"
import { getWeather } from "@/lib/weather-service"

export default async function Home() {
  // Default to New York
  const data = await getWeather(40.71, -74.01)

  return (
    <div className="flex h-full">
      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          
          <WeatherHeader current={data.current} />
          
          <ActivityCarousel temperature={data.current.temperature_2m} />
          
          <ForecastChart hourly={data.hourly} />
          
          <AirConditions current={data.current} daily={data.daily} />

          {/* Mobile/Tablet Forecast View (Hidden on XL screens) */}
          <div className="xl:hidden">
            <MiniForecast daily={data.daily} />
          </div>
        </div>
      </main>

      {/* Right Details Panel (Desktop Only) */}
      <aside className="w-[360px] p-8 border-l border-white/10 overflow-y-auto bg-black/5 hidden xl:block">
        <MiniForecast daily={data.daily} />
      </aside>
    </div>
  )
}
