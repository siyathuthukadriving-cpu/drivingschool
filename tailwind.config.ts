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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Sathuthuka Driving School palette, sampled from the school banner:
        // signature red #cb120d, near-black ground, white, and the gold used
        // for "OVER 30 YEARS". 50-300 are tints, 600 is the logo red.
        brand: {
          50:  '#fff1f0',
          100: '#ffe0dd',
          200: '#ffc2bc',
          300: '#ff968d',
          400: '#f2574d',
          500: '#e02a21',
          600: '#cb120d',
          700: '#a50e0a',
          800: '#141414',
          900: '#0a0a0a',
          950: '#000000',
        },
        accent: {
          100: '#fdecc8',
          200: '#fcce80',
          300: '#f7c25a',
          400: '#f2a916',
          500: '#e09201',
          600: '#b87400',
        },
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.06)',
        'nav': '0 1px 3px rgba(0,0,0,0.08), 0 4px 20px rgba(0,0,0,0.06)',
        'hero': '0 8px 32px rgba(0,0,0,0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'fade-in-up': 'fadeInUp 0.4s ease-out',
        'slide-down': 'slideDown 0.2s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-4px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
