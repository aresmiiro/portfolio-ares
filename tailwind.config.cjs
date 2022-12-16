/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./**/*.{html,js}', './*.html'],
  theme: {
    extend: {
      colors: {
        'purple' : '#9b005a',
        'orange' : '#ff8906',
        'bglight': '#fff',
        'bgdark' : '#040010',
        'text-light': '#1b1c1e',
        'text-dark': '#a7a9be',
      },
      fontFamily: {
        primary: ["'Quicksand'", "'sans-serif'"],
        title: [ "'Alegreya Sans'", "sans-serif"],
        subtitle: ["'Lato'", "sans-serif"],
        text: ["'Frank Ruhl Libre'", "serif"],
      },
      gridTemplateColumns: {
        'fluid': 'repeat(auto-fit, minmax(400px, 1fr))',
      },
      boxShadow: {
        'pink': '0 5px 20px 0.1px rgba(116, 69, 69, 0.33)',
      }
    },
  },
  plugins: []
}
