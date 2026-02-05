/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rustic-brown': '#8B4513',
        'cream': '#FFF8DC',
        'muted-red': '#CD5C5C',
        'dark-brown': '#654321',
      },
    },
  },
  plugins: [],
}
