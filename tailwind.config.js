/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Geist Mono', 'monospace'],
      },
      colors: {
        // Custom portfolio colors
        'portfolio': {
          'bg': '#1a1a1a',
          'card': '#3C3C3C',
          'border': '#383A3C',
          'accent': '#8E979F',
        },
      },
      fontSize: {
        '10': '10pt',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
