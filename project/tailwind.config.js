/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        begeClaro: '#F5F5DC', // Beige Claro
        marromEscuro: '#8B4513', // Marrom Escuro
        caramelo: '#D2691E', // Caramelo
        textoPrimario: '#4B4B4B', // Texto Primário (para o corpo do texto)
        textoSecundario: '#A4A4A4', // Texto Secundário
      },
    },
  },
  plugins: [],
};
