
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
          DEFAULT: "#808000", // Olive
          dark: "#556B2F", // Darker olive
        },
        accent: {
          DEFAULT: "#F3E5AB", // Light yellow
          light: "#FAFAD2", // Lighter yellow
        },
        surface: {
          DEFAULT: "rgba(255, 255, 255, 0.8)",
          dark: "rgba(47, 62, 70, 0.05)",
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
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        }
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out forwards",
        "fade-in": "fade-in 0.3s ease-out forwards",
        "unfold": "unfold 0.5s ease-out forwards",
      },
      backgroundImage: {
        'gradient-sections': 'linear-gradient(180deg, #F3E5AB 0%, #808000 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
