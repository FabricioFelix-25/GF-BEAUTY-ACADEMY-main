/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dourado: '#b2892b',
        marrom: '#885822',
        bege: '#E7E0D8',
        textoPrimario: '#4B4B4B',
        textoSecundario: '#A4A4A4',
      },
      fontFamily: {
        gerhona: ['Gerhona', 'serif'],
        futura: ['FuturaNowHeadline', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
