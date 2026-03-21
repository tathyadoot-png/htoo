import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rainRed: "#EF4444",
        rainOrange: "#F97316",
        rainYellow: "#FACC15",
        rainGreen: "#22C55E",
        rainBlue: "#3B82F6",
        rainPurple: "#A855F7",
      },
      backgroundImage: {
        'rainbow-mesh': "linear-gradient(to right, #F97316, #FACC15, #22C55E, #3B82F6, #A855F7)",
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;