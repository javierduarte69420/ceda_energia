/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        font_awesome_6_free: ['Font Awesome 6 Free', 'sans-serif'],
        font_awesome_5_free: ['Font Awesome 5 Free', 'sans-serif'],
        fontawesome: ['FontAwesome', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
