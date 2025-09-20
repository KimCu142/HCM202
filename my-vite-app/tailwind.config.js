/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e40af',
          light: '#1d4ed8',
          dark: '#1e3a8a',
        },
        accent: '#0ea5e9',
        muted: '#f1f5f9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
