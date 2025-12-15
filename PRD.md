# Product Requirements Document (PRD): SunScale Weather Dashboard

| Document Details | |
| :--- | :--- |
| **Project Name** | SunScale Weather Demo |
| **Version** | 1.0 (MVP) |
| **Status** | **Ready for Development** |
| **Target Platform** | Web (Responsive Single Page Application) |
| **Primary API** | Open-Meteo (Free, No Key Required) |

-----

## 1\. Project Overview

**Objective:** Build a pixel-perfect, responsive weather dashboard based on the provided "Golden Hour" design. The app will fetch live weather data based on the user's IP or a default location and visualize it using cards and charts.

**Scope:**

  * **Frontend Only:** No backend database required.
  * **Data Source:** Live data via public APIs.
  * **Key Focus:** CSS Grid/Flexbox layout accuracy and Charting integration.

-----

## 2\. Technical Stack & Recommendations

  * **Framework:** React.js, Vue.js, or Next.js.
  * **Styling:** Tailwind CSS (Recommended for rapid layout) or SCSS.
  * **Charting Library:** Recharts or Chart.js (Must support Spline/Bezier curves for the forecast graph).
  * **Icons:** Lucide React or FontAwesome (White outline style).
  * **Date Formatting:** date-fns or Moment.js.

-----

## 3\. Design System & UI Specifications

### 3.1 Color Palette

Based on the provided mockups, use the following hex codes:

  * **Primary Background (Gold/Ochre):** `#D69E36` (Main background gradient start).
  * **Secondary Background (Darker Gold):** `#C48B2C` (Sidebar/Cards).
  * **Text Color (Primary):** `#FFFFFF` (White - Used for 90% of text).
  * **Text Color (Secondary):** `rgba(255, 255, 255, 0.7)` (Used for labels like "Real Feel").
  * **Accent (Graph Line):** `#FFFFFF` (White, thin stroke).

### 3.2 Typography

  * **Font Family:** 'Inter', 'Roboto', or 'DM Sans' (Clean sans-serif).
  * **Headings:** Light to Medium weight (e.g., "Cloudy" is large, standard weight).
  * **Data Points:** Bold weight (e.g., "26°C").

-----

## 4\. API Integration Strategy (Open-Meteo)

**Base URL:** `https://api.open-meteo.com/v1/forecast`
**Required Parameters:** `latitude`, `longitude`, `current`, `hourly`, `daily`.

### Example Fetch Call

```javascript
// Example for New York coordinates
const API_URL = "https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.00&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&hourly=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto";
```

### Data Mapping Guide

| UI Component | Data Point Needed | Open-Meteo Field mapping |
| :--- | :--- | :--- |
| **Main Temp** | Current Temperature | `current.temperature_2m` |
| **Main Condition** | Weather Text (e.g., Cloudy) | Map `current.weather_code` (e.g., 3 = Overcast) |
| **Wind** | Wind Speed | `current.wind_speed_10m` |
| **Chance of Rain** | Precipitation Probability | `daily.precipitation_probability_max` |
| **Graph** | 24h Trend | `hourly.temperature_2m` (First 24 entries) |

-----

## 5\. Functional Requirements (Component Breakdown)

### 5.1 The Sidebar (Left)

  * **Structure:** Fixed width (approx 80px-100px).
  * **Items:** User Avatar (Top), Navigation Icons (Weather, Explore, Cities, Settings).
  * **State:** Icons should have a distinct "Active" state (White vs. 50% Opacity).

### 5.2 Header Section (Top Left)

  * **Location:** Display hardcoded "New York" or dynamic City Name via Reverse Geocoding API (e.g., `api.bigdatacloud.net`).
  * **Main Weather:**
      * Big Header: Condition Text (e.g., "Cloudy").
      * Big Temp: Numeric value + Unit.
      * Date: Format as `Day | DD MMM YYYY`.
  * **Main Icon:** Large SVG rendered on the right side of this section (Sun/Cloud).

### 5.3 Activities Carousel (Middle)

  * **Title:** "Activities in your area".
  * **Layout:** Horizontal scroll container (Flex row).
  * **Logic (Frontend Config):** Create a mapping object.
      * *If Temp \> 25°C:* Show Swimming, Beach.
      * *If Temp \< 10°C:* Show Hiking, Camping.
  * **Card Content:** Background Image, Title, Distance label (static/randomized for demo).

### 5.4 24-Hour Forecast Graph (Bottom Left)

  * **Library:** Use a Line Chart.
  * **Styling:**
      * **Line:** Smooth curve (Monotone/Spline), White color, 2px width.
      * **Axis:** Hidden Y-axis. X-axis shows time labels (10:00, 14:00).
      * **Gradient:** (Optional) Slight white gradient fade under the line.

### 5.5 Right Sidebar Details (Right Panel)

  * **Mini 3-Day Forecast:**
      * List view: Day Name + Icon.
  * **Air Conditions Grid:**
      * 2x2 Grid layout.
      * **Real Feel:** `temperature_2m` +/- 2 degrees.
      * **Wind:** Display value from API + "km/h".
      * **Chance of Rain:** Display percentage.
      * **UV Index:** Display static value or fetch if API allows (Open-Meteo has `daily.uv_index_max`).

-----

## 6\. Non-Functional Requirements

1.  **Responsiveness:**
      * **Desktop:** 3-Column Grid (Sidebar | Main Content | Right Details).
      * **Tablet:** 2-Column (Sidebar | Main Content) -\> Details move to bottom.
      * **Mobile:** Single column stack. Sidebar becomes a bottom navigation bar.
2.  **Performance:** Minimize layout shifts (CLS). Load images with `lazy` loading attributes.
3.  **Error Handling:** If API fails, display "Weather data unavailable" and show cached/mock data to preserve UI structure.

-----

## 7\. Development Assets Needed

  * **Images:** 4 stock images for the "Activities" section (Forest, Park, Pool, Beach).
  * **Icons:** 1 set of Weather Icons (Sun, Cloud, Rain, Snow) matching the minimal white aesthetic.
