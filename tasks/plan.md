# SunScale Weather Dashboard - Implementation Plan

@execution-plan
Build a pixel-perfect weather dashboard using Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, and Recharts. Follow the "Golden Hour" design with gold gradient backgrounds (#D69E36, #C48B2C) and white text (#FFFFFF). Implement responsive 3-column layout (Sidebar | Main | Details) that collapses to mobile-first design. Use Open-Meteo API with exact field mappings from tasks/api.md.

## Phase 1: Foundation & Setup
- [x] Subtask 1.1: Install Recharts, Lucide React, and date-fns dependencies
- [x] Subtask 1.2: Configure Tailwind theme with gold colors (#D69E36, #C48B2C) in tailwind.config.ts
- [x] Subtask 1.3: Create types/weather.ts with exact API response interfaces matching tasks/api.md
- [x] Subtask 1.4: Create lib/weather-codes.ts mapping WMO codes to Lucide icons
- [x] Subtask 1.5: Create lib/weather-service.ts with getWeather() function using exact endpoint from tasks/api.md

## Phase 2: Core Layout & Navigation
- [ ] Subtask 2.1: Create app/layout.tsx with 3-column grid layout (80px Sidebar | Main | Right Details)
- [ ] Subtask 2.2: Apply gold gradient background classes: bg-gradient-to-br from-[#D69E36] to-[#C48B2C]
- [ ] Subtask 2.3: Create components/sidebar.tsx with 80px fixed width navigation
- [ ] Subtask 2.4: Add navigation icons (Weather, Explore, Cities, Settings) with active states
- [ ] Subtask 2.5: Position user avatar at top of sidebar

## Phase 3: Weather Header Component
- [ ] Subtask 3.1: Create components/weather-header.tsx
- [ ] Subtask 3.2: Display location "New York" with current.apparent_temperature mapping
- [ ] Subtask 3.3: Show main temperature using current.temperature_2m field
- [ ] Subtask 3.4: Map current.weather_code to condition text (Cloudy, Sunny, etc.)
- [ ] Subtask 3.5: Format date as "Day | DD MMM YYYY" using date-fns
- [ ] Subtask 3.6: Position weather icon (Sun/Cloud) on right side using weather_code

## Phase 4: Activities Carousel
- [ ] Subtask 4.1: Create components/activity-carousel.tsx
- [ ] Subtask 4.2: Implement horizontal scroll container with Flex row layout
- [ ] Subtask 4.3: Add temperature logic: >25°C shows Swimming/Beach, <10°C shows Hiking/Camping
- [ ] Subtask 4.4: Create activity cards with background images, titles, and distance labels

## Phase 5: Air Conditions Grid
- [ ] Subtask 5.1: Create components/air-conditions.tsx with 2x2 grid layout
- [ ] Subtask 5.2: Display "Real Feel" using current.apparent_temperature field
- [ ] Subtask 5.3: Show "Wind" using current.wind_speed_10m field with "km/h" suffix
- [ ] Subtask 5.4: Display "Chance of Rain" using daily.precipitation_probability_max with "%" suffix
- [ ] Subtask 5.5: Show "UV Index" using daily.uv_index_max field

## Phase 6: 3-Day Forecast
- [ ] Subtask 6.1: Create components/mini-forecast.tsx
- [ ] Subtask 6.2: Implement list view with day names and weather icons
- [ ] Subtask 6.3: Map daily.weather_code to appropriate Lucide icons

## Phase 7: 24-Hour Forecast Chart
- [ ] Subtask 7.1: Create components/forecast-chart.tsx using Recharts LineChart
- [ ] Subtask 7.2: Configure smooth curve with Monotone interpolation
- [ ] Subtask 7.3: Style line as white (#FFFFFF, 2px width) with optional gradient fill
- [ ] Subtask 7.4: Hide Y-axis, show time labels on X-axis
- [ ] Subtask 7.5: Use first 24 entries from hourly.temperature_2m for chart data

## Phase 8: API Integration
- [ ] Subtask 8.1: Create lib/location-service.ts for IP-based location detection
- [ ] Subtask 8.2: Implement fallback to New York coordinates (40.71, -74.01)
- [ ] Subtask 8.3: Integrate getWeather() service with React components
- [ ] Subtask 8.4: Add loading skeletons for all weather components
- [ ] Subtask 8.5: Handle API errors with "Weather data unavailable" message

## Phase 9: Responsive Design
- [ ] Subtask 9.1: Implement tablet layout: 2-column (Sidebar | Main), Details moves to bottom
- [ ] Subtask 9.2: Create mobile layout: single column stack with bottom navigation
- [ ] Subtask 9.3: Test carousel scroll functionality on mobile devices
- [ ] Subtask 9.4: Optimize chart interactions for touch devices

## Phase 10: Polish & Optimization
- [ ] Subtask 10.1: Add lazy loading for activity card images
- [ ] Subtask 10.2: Implement loading skeletons with proper gold theme colors
- [ ] Subtask 10.3: Optimize Recharts re-renders using React.memo
- [ ] Subtask 10.4: Add error boundaries for graceful component failures
- [ ] Subtask 10.5: Show cached data when API fails with retry mechanisms