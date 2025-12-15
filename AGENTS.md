# AGENTS.md

## 🎯 PRIMARY DIRECTIVE: Keep It Simple

## 📐 Engineering Principles (Strict Adherence)

1.  **KISS (Keep It Simple, Stupid):**
    -   Prefer explicit code over "clever" one-liners.
    -   Do not create generic "BaseButton" wrappers unless used 3+ times.
    -   Use axios only for this project
    -   if required use zustand for global state management 

2.  **YAGNI (You Aren't Gonna Need It):**
    -   Do not build a robust Error Boundary system for a demo.
    -   Do not implement "Dark Mode" unless explicitly asked (stick to the Gold theme).
    -   Delete unused code immediately.

3.  **DRY (Pragmatically):**
    -   Copy-paste is acceptable for this demo if it avoids a complex abstraction.
    -   Refactor only when you see the 3rd duplicate.
---

## 🛠️ Project Specifications (The "What")

### 1. Commands
-   `pnpm run dev` - Start development server
-   `pnpm run lint` - Check for errors

### 2. Imports & Structure
- Use TypeScript with strict mode enabled
- Import React components: `import Image from "next/image"`
- Import types: `import type { Metadata } from "next"`
- Use path alias: `@/*` maps to root directory
- use tailwind for styling.
- Import shadcn components: `import { Button } from "@/components/ui/button"`



### 2. Tech Stack & Styling
-   **Framework:** Next.js 15 (App Router).
-   **Language:** TypeScript (Strict mode).
-   **Components:** `shadcn/ui` (Radix primitives), Tailwind CSS.
-   **Icons:** `lucide-react`.

### 3. "SunScale" Design Tokens
*Strictly enforce these colors:*
-   **Primary Background:** `#D69E36` (Gold/Ochre)
-   **Sidebar/Cards:** `#C48B2C` (Darker Gold)
-   **Text Primary:** `#FFFFFF` (White)
-   **Text Secondary:** `rgba(255, 255, 255, 0.7)`
-   **Chart Line:** `#FFFFFF`

### 4. Data Integration (Open-Meteo)
* **Endpoint:** `https://api.open-meteo.com/v1/forecast`
* **Params:** `?latitude=...&longitude=...&current=...&hourly=...&daily=...`
* **Mapping:**
    * Code 0 = Sunny
    * Code 1-3 = Cloudy
    * Code 61+ = Rainy

## 🚫 Anti-Patterns (Do Not Do)
1.  **No Prop Drilling Hell:** Use composition or simple State.
2.  **No "God Components":** Split the `Dashboard` into `Sidebar`, `CurrentWeather`, and `ForecastGraph`.
3.  **No Backend Proxies:** Call the Open-Meteo API directly from Client Components (or Server Actions) for simplicity.


## Code Complexity Limits

- **Hooks**: ≤50 LOC, single responsibility (SRP)
- **Components**: Target 100-200 LOC, hard limit 300
- **Functions**: ≤30 LOC (if more, it's doing too much)
- **Files per feature**: 3-5 files (KISS), never exceed 10
- **Nesting depth**: Max 3 levels (readability)
- **Cyclomatic complexity**: Keep under 10

