/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#a855f7',
        secondary: '#64748b',
        dark: '#0f172a'
      }
    },
    fontFamily: {
      ubuntu: ['Ubuntu'],
      poppins: ['Poppins']
    }
  },
  plugins: []
}
