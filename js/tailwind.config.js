/** @type {import('tailwindcss').Config} */ 

module.exports = {
  content: ["{js}"],
  theme: {
    extend: {},
  },
  plugins: [
    // ...
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],}