# Agent Development Guide

## Commands

### Development
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Testing
- No test runner configured. Add tests manually if needed.

## Code Style Guidelines

### Imports & Structure
- Use TypeScript with strict mode enabled
- Import React components: `import Image from "next/image"`
- Import types: `import type { Metadata } from "next"`
- Use path alias: `@/*` maps to root directory
- Import shadcn components: `import { Button } from "@/components/ui/button"`

### Component Conventions  
- Default export named functions: `export default function Home()`
- Use TypeScript interfaces for props: `Readonly<{ children: React.ReactNode }>`
- Apply Tailwind classes for styling
- Use Next.js Image component with priority loading
- Use shadcn/ui components for consistent UI elements

### Naming & Formatting
- Follow kebab-case for CSS classes: `dark:bg-black`
- Use semantic HTML: `<main>`, `<h1>`, `<p>`
- Apply dark mode with `dark:` prefix
- Use Geist font variables: `--font-geist-sans`, `--font-geist-mono`
- Use shadcn "new-york" style with neutral base color

### shadcn/ui Configuration
- Style: "new-york"
- Base color: "neutral"
- CSS variables: enabled
- Icon library: lucide
- Component aliases: `@/components/ui/*`

### Error Handling
- No explicit error boundaries configured
- TypeScript strict mode catches compile-time errors
- Runtime errors handled by Next.js error pages

## Weather Dashboard Requirements (from PRD)

### Color Palette
- Primary Background (Gold/Ochre): `#D69E36`
- Secondary Background (Darker Gold): `#C48B2C`
- Text Color (Primary): `#FFFFFF`
- Text Color (Secondary): `rgba(255, 255, 255, 0.7)`
- Accent (Graph Line): `#FFFFFF`

### API Integration
- Use Open-Meteo API: `https://api.open-meteo.com/v1/forecast`
- Required parameters: `latitude`, `longitude`, `current`, `hourly`, `daily`
- Map weather codes to condition text (e.g., 3 = Overcast)

### Key Components
- Sidebar navigation with active states
- Weather cards with temperature and condition text
- 24-hour forecast line chart with smooth curves
- Activities carousel based on temperature ranges
- 3-day forecast mini cards
- Air conditions grid (Real Feel, Wind, Rain, UV)