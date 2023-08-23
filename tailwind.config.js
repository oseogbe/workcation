/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      padding: {
        '5/6': '83.3%'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
