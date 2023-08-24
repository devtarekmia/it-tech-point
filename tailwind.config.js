/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'light-gradient': "url('/public/gradient.jpg')",
      }
    },
  },
  plugins: [],
}

