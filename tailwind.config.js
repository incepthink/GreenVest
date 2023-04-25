/** @type {import('tailwindcss').Config} */


const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'oswald':["Oswald", "sans-serif"],
      'nunito':["Nunito Sans", "sans-serif"],
      'bebas':["Bebas Neue",'cursive'],
      'poppins':["Poppins", "sans-serif"]
    },
    backgroundImage: {
      "home-background-1": 'url("/images/illustration.png")',
      "service-background": 'url("/images/OurServiceBG.png")',
      "img-background":'url("/images/earth-bg.png")'
    },
    scrollbar: {
      width: '0.5em',
      height:'0.25em' 
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: '#04A6E7', 
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#888', 
      borderRadius: '10px', 
    },
    extend: {},
  },
  plugins: [],
}

