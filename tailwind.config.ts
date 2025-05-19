import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Sophisticated color palette
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        copper: {
          50: "#fcf9f6", // Added copper-50
          100: "#f8f1ea", // Added copper-100
          200: "#f1e2d3", // Added copper-200
          300: "#e6cbb0", // Added copper-300
          400: "#d9ac85",
          500: "#cc8e5e",
          600: "#b07a4a",
          700: "#a05e3a",
          800: "#834d33", // Added copper-800
          900: "#6c422e", // Added copper-900
          950: "#3a2116", // Added copper-950
        },
        sand: {
          50: "#faf8f1", // Added sand-50
          100: "#f5f0e3", // Added sand-100
          200: "#e9e0c7", // Added sand-200
          300: "#dac9a0", // Added sand-300
          400: "#c9ad77",
          500: "#bb9659",
          600: "#a97c46",
          700: "#8c623a",
          800: "#734f34", // Added sand-800
          900: "#60422e", // Added sand-900
          950: "#352217", // Added sand-950
        },
        charcoal: {
          50: "#f6f7f9", // Added charcoal-50
          100: "#eceef2", // Added charcoal-100
          200: "#d5dae2", // Added charcoal-200
          300: "#b0bac9", // Added charcoal-300
          400: "#8494ab", // Added charcoal-400
          500: "#657590", // Added charcoal-500
          600: "#505c77", // Added charcoal-600
          700: "#424b61",
          800: "#394152",
          900: "#333946",
          950: "#21242d",
        },
      },
      fontFamily: {
        vazirmatn: ["var(--font-vazirmatn)"],
        playfair: ["var(--font-playfair-display)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 0.3s ease-in-out",
      },
      boxShadow: {
        elegant: "0 10px 30px rgba(0, 0, 0, 0.08)",
        soft: "0 5px 15px rgba(0, 0, 0, 0.05)",
        highlight: "0 0 15px rgba(201, 173, 119, 0.3)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
        "inner-highlight": "inset 0 2px 4px 0 rgba(201, 173, 119, 0.2)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-copper": "linear-gradient(to right, #cc8e5e, #a05e3a)",
        "gradient-sand": "linear-gradient(to right, #bb9659, #8c623a)",
        "gradient-charcoal": "linear-gradient(to right, #505c77, #394152)",
        "noise-pattern":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
