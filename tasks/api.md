# Backend API Contract (Open-Meteo Integration)

**Base URL:** `https://api.open-meteo.com/v1`
**Auth:** None required (Free tier).
**Format:** JSON

---

## 1. Get Weather Dashboard Data
This single endpoint fetches current conditions, the 24-hour forecast, and daily metrics in one request.

- **Endpoint:** `GET /forecast`
- **Description:** Returns combined weather data for a specific geolocation.

### Request Parameters
| Parameter | Value / Description |
| :--- | :--- |
| `latitude` | `float` (e.g., `40.71` for NYC) |
| `longitude` | `float` (e.g., `-74.01` for NYC) |
| `current` | `temperature_2m,weather_code,wind_speed_10m,apparent_temperature` |
| `hourly` | `temperature_2m,weather_code` |
| `daily` | `weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max` |
| `timezone` | `auto` (Automatically matches the location's local time) |

### Example Request URL

[https://api.open-meteo.com/v1/forecast?latitude=40.71\&longitude=-74.01\&current=temperature\_2m,weather\_code,wind\_speed\_10m,apparent\_temperature\&hourly=temperature\_2m,weather\_code\&daily=weather\_code,temperature\_2m\_max,temperature\_2m\_min,uv\_index\_max,precipitation\_probability\_max\&timezone=auto](https://www.google.com/search?q=https://api.open-meteo.com/v1/forecast%3Flatitude%3D40.71%26longitude%3D-74.01%26current%3Dtemperature_2m,weather_code,wind_speed_10m,apparent_temperature%26hourly%3Dtemperature_2m,weather_code%26daily%3Dweather_code,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max%26timezone%3Dauto)


### Response Schema (JSON)
{
  "current": {
    "time": "2023-12-12T14:00",
    "temperature_2m": 26.0,          // UI: Main Big Temp
    "apparent_temperature": 28.5,    // UI: "Real Feel"
    "weather_code": 3,               // UI: Main Icon & Condition Text
    "wind_speed_10m": 12.5           // UI: Wind Speed (km/h)
  },
  "hourly": {
    "time": [
      "2023-12-12T00:00",
      "2023-12-12T01:00",
      "..." // 24-hour array
    ],
    "temperature_2m": [
      22.1,
      21.8,
      "..." // UI: Forecast Graph Data
    ],
    "weather_code": [
      1,
      2,
      "..." // UI: Icons on the graph (optional)
    ]
  },
  "daily": {
    "time": [
      "2023-12-12",
      "2023-12-13",
      "2023-12-14"
    ],
    "weather_code": [
      3,
      1,
      51
    ], // UI: Right Sidebar Mini-Forecast Icons
    "uv_index_max": [
      4.5
    ], // UI: UV Index
    "precipitation_probability_max": [
      20
    ] // UI: Chance of Rain (%)
  }
}

-----

## 2\. City Search (Geocoding) - *Optional*

Used if you want to allow the user to type "London" instead of hardcoding coordinates.

  - **Base URL:** `https://geocoding-api.open-meteo.com/v1`
  - **Endpoint:** `GET /search`

### Example Request

```
[https://geocoding-api.open-meteo.com/v1/search?name=New+York&count=1&language=en&format=json](https://geocoding-api.open-meteo.com/v1/search?name=New+York&count=1&language=en&format=json)
```

### Response Schema

```json
{
  "results": [
    {
      "id": 5128581,
      "name": "New York",
      "latitude": 40.71427,  // Use this for the Weather API call
      "longitude": -74.00597, // Use this for the Weather API call
      "country": "United States",
      "admin1": "New York"    // State/Region
    }
  ]
}
```

-----

## 3\. Data Dictionary: WMO Weather Codes

Use this mapping to select the correct Icon (Lucide/FontAwesome) and Condition Text.

| WMO Code | Description | UI Text | Icon Suggestion |
| :--- | :--- | :--- | :--- |
| **0** | Clear sky | Sunny / Clear | `Sun` |
| **1, 2, 3** | Mainly clear, partly cloudy, and overcast | Cloudy | `Cloud` / `CloudSun` |
| **45, 48** | Fog and depositing rime fog | Foggy | `CloudFog` |
| **51, 53, 55** | Drizzle: Light, moderate, and dense intensity | Drizzle | `CloudDrizzle` |
| **61, 63, 65** | Rain: Slight, moderate and heavy intensity | Rainy | `CloudRain` |
| **71, 73, 75** | Snow fall: Slight, moderate, and heavy intensity | Snowy | `Snowflake` |
| **80, 81, 82** | Rain showers: Slight, moderate, and violent | Showers | `CloudRain` |
| **95, 96, 99** | Thunderstorm: Slight or moderate | Storm | `CloudLightning` |
