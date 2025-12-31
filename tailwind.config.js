/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B35',
        secondary: '#F7931E',
        accent: '#FDC500',
        comic: '#FFE66D',
        dark: '#1A1A2E',
        light: '#FFF8E7',
        purple: '#9D4EDD',
        blue: '#4CC9F0',
        red: '#EF476F',
      },
      fontFamily: {
        comic: ['Bangers', 'cursive'],
        marker: ['Permanent Marker', 'cursive'],
        sketch: ['Cabin Sketch', 'cursive'],
        sans: ['Comic Neue', 'cursive'],
      },
      boxShadow: {
        'comic': '4px 4px 0px 0px rgba(0,0,0,0.9)',
        'comic-lg': '6px 6px 0px 0px rgba(0,0,0,0.9)',
        'comic-xl': '8px 8px 0px 0px rgba(0,0,0,0.9)',
      },
    },
  },
  plugins: [],
}
