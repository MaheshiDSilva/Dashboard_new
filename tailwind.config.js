/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
    },
    colors: {
      customBlack: '#181520', 
      customBlue: '#CAD6EC', 
      customBlack2: '#434350', 
    },
  },
  plugins: [],
}
}
