# SunScale Weather Dashboard - Implementation Plan

@execution-plan
Build a pixel-perfect weather dashboard using Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, and Recharts. Follow the "Golden Hour" design with gold gradient backgrounds (#D69E36, #C48B2C) and white text (#FFFFFF). Use Open-Meteo API.

## Phase 1: Foundation & Setup
- [x] Subtask 1.1: Install Recharts, Lucide React, and date-fns dependencies
- [x] Subtask 1.2: Configure Tailwind theme with gold colors (#D69E36, #C48B2C) in tailwind.config.ts
- [x] Subtask 1.3: Create types/weather.ts with exact API response interfaces matching tasks/api.md
- [x] Subtask 1.4: Create lib/weather-codes.ts mapping WMO codes to Lucide icons
- [x] Subtask 1.5: Create lib/weather-service.ts with getWeather() function using exact endpoint from tasks/api.md

## Phase 2: Core Layout & Navigation
- [x] Subtask 2.1: Create app/layout.tsx with responsive grid layout (Sidebar | Main | Right Details)
- [x] Subtask 2.2: Apply gold gradient background classes: bg-gradient-to-br from-[#D69E36] to-[#C48B2C]
- [x] Subtask 2.3: Create components/sidebar.tsx with fixed width navigation and active states
- [x] Subtask 2.4: Position user avatar and navigation icons correctly per Figma
- [x] Subtask 2.5: Create main page structure with placeholders for future components

## Phase 3: Weather Header & Activities
- [x] Subtask 3.1: Create components/weather-header.tsx showing Location, Temp, and Condition
- [x] Subtask 3.2: Format dates using date-fns and map weather codes to text
- [x] Subtask 3.3: Create components/activity-carousel.tsx with horizontal scroll
- [x] Subtask 3.4: Implement logic for activity suggestions based on temp (>25°C Swim, <10°C Hike)
- [x] Subtask 3.5: Create activity cards with background images and distance labels

## Phase 4: Air Conditions & 7-Day Forecast
- [x] Subtask 4.1: Create components/air-conditions.tsx (Real Feel, Wind, Rain, UV)
- [x] Subtask 4.2: Implement 2x2 grid for air conditions with icons and values
- [x] Subtask 4.3: Create components/mini-forecast.tsx for the right sidebar
- [x] Subtask 4.4: Implement list view for 7-day forecast with day names and icons
- [x] Subtask 4.5: Map daily weather codes to appropriate Lucide icons

## Phase 5: Charts, API Integration & Polish
- [x] Subtask 5.1: Create components/forecast-chart.tsx using Recharts (24h temp trend)
- [x] Subtask 5.2: Integrate real API data into all components using lib/weather-service.ts
- [x] Subtask 5.3: Add loading skeletons for all components matching the gold theme
- [x] Subtask 5.4: Implement responsive adjustments for Mobile/Tablet
- [x] Subtask 5.5: Final polish: animations, error handling, and performance optimization