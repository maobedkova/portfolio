
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
          DEFAULT: "#C1D5A4", // Calm sage green
          dark: "#98AA7B", // Darker sage green
          light: "#EAF0E0", // Lighter sage for widgets
        },
        accent: {
          DEFAULT: "#F7F4E3", // Soft cream
          light: "#FDFBF2", // Lighter cream
        },
        surface: {
          DEFAULT: "rgba(234, 240, 224, 0.8)", // Light sage with opacity
          dark: "rgba(193, 213, 164, 0.05)", // Sage with low opacity
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
        'gradient-sections': 'linear-gradient(180deg, #F7F4E3 0%, #C1D5A4 100%)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        'elliptical': '999px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
