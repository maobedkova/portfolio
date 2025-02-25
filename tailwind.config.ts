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
          DEFAULT: "#7E69AB",
          dark: "#6E59A5",
          light: "#9b87f5",
        },
        accent: {
          DEFAULT: "#1A1F2C",
          light: "#222632",
        },
        surface: {
          DEFAULT: "rgba(30, 34, 44, 0.8)",
          dark: "rgba(20, 23, 31, 0.95)",
        },
      },
      backgroundImage: {
        'gradient-sections': 'linear-gradient(180deg, #1A1F2C 0%, #0F1219 100%)',
        'gradient-violet': 'linear-gradient(135deg, #7E69AB 0%, #D946EF 100%)',
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
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        'elliptical': '999px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
