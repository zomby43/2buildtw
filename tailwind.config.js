/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",              // Archivo HTML principal en la raíz
    "./src/**/*.{html,js}"       // Todos los archivos dentro de /src/
  ],
  theme: {
    extend: {
      fontFamily: { 
        "lato": ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
