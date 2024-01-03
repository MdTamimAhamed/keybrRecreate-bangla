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
        'background':'#DDD2C5',
        'forground':'#EEE9E3',
        'text-clr':'#534029',
        'light-text':'#856641',
        'light-bg':'#1F2937',
        'semi-dark-text':'#606A72',
        'light-green':'#34C73B',
        'highlight':'#E0C7A8',
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

