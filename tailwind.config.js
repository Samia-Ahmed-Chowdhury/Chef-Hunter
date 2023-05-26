/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       primaryColor:'#F08428',
       accordion_body:'#fb8b2c45',
       accordion_header:'#ff75004f'
   },
    },
  },
  plugins: [require("daisyui")]
}

