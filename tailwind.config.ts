import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ABUELA Brand Palette (from image.png)
        "dark-green": "#0A3323",
        "moss-green": "#839958",
        "beige": "#F7F4D5",
        "rosy-brown": "#D3968C",
        "midnight-green": "#105666",
        // Semantic aliases
        background: "#F7F4D5",
        foreground: "#0A3323",
        primary: {
          DEFAULT: "#0A3323",
          foreground: "#F7F4D5",
        },
        secondary: {
          DEFAULT: "#839958",
          foreground: "#F7F4D5",
        },
        accent: {
          DEFAULT: "#D3968C",
          foreground: "#0A3323",
        },
        muted: {
          DEFAULT: "#EAE7C0",
          foreground: "#4a6741",
        },
        card: {
          DEFAULT: "#FDFBEE",
          foreground: "#0A3323",
        },
        border: "#d4d0a8",
        input: "#EAE7C0",
        ring: "#839958",
        // Extended palette
        cream: {
          50: "#FDFBEE",
          100: "#F7F4D5",
          200: "#EEE9B8",
          300: "#E2DA94",
        },
        forest: {
          50: "#e8f0eb",
          100: "#b8d1bf",
          200: "#6fa882",
          300: "#3d7a58",
          400: "#1a5238",
          500: "#0A3323",
          600: "#082b1d",
          700: "#062316",
          800: "#041b10",
          900: "#02120a",
        },
        sage: {
          100: "#d4dfbc",
          200: "#bdd09e",
          300: "#a5be81",
          400: "#8fae67",
          500: "#839958",
          600: "#6e8249",
          700: "#5a6b3c",
          800: "#46542f",
          900: "#323d22",
        },
        blush: {
          100: "#f5ddd8",
          200: "#ecbcb3",
          300: "#e09b8f",
          400: "#d87a6b",
          500: "#D3968C",
          600: "#b87e74",
          700: "#9d675d",
          800: "#825047",
          900: "#673a31",
        },
        teal: {
          100: "#d0e6ea",
          200: "#a0cdd5",
          300: "#70b4bf",
          400: "#3e9baa",
          500: "#105666",
          600: "#0d4856",
          700: "#0a3b46",
          800: "#082e36",
          900: "#052026",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      borderRadius: {
        lg: "1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        card: "0 2px 16px 0 rgba(10, 51, 35, 0.08)",
        "card-hover": "0 8px 32px 0 rgba(10, 51, 35, 0.15)",
        warm: "0 4px 24px 0 rgba(211, 150, 140, 0.2)",
        glow: "0 0 40px 0 rgba(131, 153, 88, 0.25)",
      },
      backgroundImage: {
        "gradient-warm":
          "linear-gradient(135deg, #F7F4D5 0%, #EAE7C0 50%, #F5DDD8 100%)",
        "gradient-forest":
          "linear-gradient(135deg, #0A3323 0%, #105666 100%)",
        "gradient-hero":
          "linear-gradient(160deg, #0A3323 0%, #1a5238 40%, #105666 100%)",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
