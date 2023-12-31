/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'background-light':'#2F3652',
        'background':'#F8F8F8',
        'forground':'#121315',
        'text-clr':'#A8B3C5',
        'light-text':'#7F8E98',
        'light-bg':'#1F2937',
        'semi-dark-text':'#606A72',
        'light-green':'#34C73B',
      },

      fontFamily:{
        'shiliguri':['Hind Siliguri', 'sans-serif;'],
        'noto':['Noto Sans Bengali', 'sans-serif'],
        'poppins' : ['Poppins', 'sans-serif'], 
        'roboto' : ['Roboto', 'sans-serif'],
        'lato' : ['Lato', 'sans-serif'],
        'comforter':['Comforter Brush','cursive'],
        'inter':['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}

