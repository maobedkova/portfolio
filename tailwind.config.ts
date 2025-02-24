
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#90EE90", // Light green
          dark: "#6B8E23", // Darker green
        },
        accent: {
          DEFAULT: "#F5F5DC", // Beige
          light: "#FDFAE4", // Lighter beige
        },
        surface: {
          DEFAULT: "rgba(156, 175, 136, 0.8)", // Light green with opacity
          dark: "rgba(107, 142, 35, 0.05)", // Dark green with opacity
        },
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "unfold": {
          "0%": { 
            maxHeight: "0",
            opacity: "0"
          },
          "100%": { 
            maxHeight: "200px",
            opacity: "1"
          },
        }
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out forwards",
        "fade-in": "fade-in 0.3s ease-out forwards",
        "unfold": "unfold 0.5s ease-out forwards",
      },
      backgroundImage: {
        'gradient-sections': 'linear-gradient(180deg, #F5F5DC 0%, #90EE90 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
