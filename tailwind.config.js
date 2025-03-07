 /** @type {import('tailwindcss').Config} */
  export default {
    content: ["./src/**/*.{html,js}",  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      container:{
        center: true,
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}