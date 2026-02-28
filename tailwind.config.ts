import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,md,mdx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        gold: {
          50: "#fff8e1",
          100: "#ffefb3",
          200: "#ffe380",
          300: "#ffd54f",
          400: "#ffca28",
          500: "#f5c542",
          600: "#d4af37",
          700: "#b8921f",
          800: "#94740f",
          900: "#6b5206"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"]
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(212,175,55,0.35), 0 10px 40px rgba(212,175,55,0.10)"
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, rgba(212,175,55,0.95) 0%, rgba(245,197,66,0.95) 45%, rgba(212,175,55,0.95) 100%)"
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        }
      },
      animation: {
        shimmer: "shimmer 3s ease-in-out infinite"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
