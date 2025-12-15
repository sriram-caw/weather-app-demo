import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#D69E36",
        sidebar: "#C48B2C",
        text: {
          primary: "#FFFFFF",
          secondary: "rgba(255, 255, 255, 0.7)",
        },
        chart: "#FFFFFF",
      },
    },
  },
  plugins: [],
}

export default config