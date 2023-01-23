/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./**/*.{html,js}', './*.html'],
  theme: {
    extend: {
      colors: {
        'purple' : '#b50069',
        'orange' : '#ff8906',
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
        'pink': '0 5px 20px 1px rgba(116, 69, 69, 0.33)',
      },
      backgroundColor: {
         'bg-pattern': "linear-gradient(90deg, rgba(177,0,115,0.36740633753501406) 0%, rgba(254,134,1,0.5214679621848739) 100%);",
      }
    },
  },
  plugins: []
}
