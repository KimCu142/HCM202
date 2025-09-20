/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7c2d12',
          light: '#a0431d',
          dark: '#5f1f0d',
        },
        accent: '#b45309',
        parchment: '#f3e7d3',
        midnight: '#1f2937',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"Source Code Pro"', 'monospace'],
      },
      backgroundImage: {
        'paper-texture': "url('/paper-texture.svg')",
      },
    },
  },
  plugins: [],
}

export default config
