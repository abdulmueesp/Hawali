/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./app/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          nunito: ['"Nunito"', 'sans-serif'],
          titan: ['"Titan One"', 'sans-serif'],
          exo2: ['"Exo 2"', 'sans-serif'],
          playfair: ['"Playfair Display"', 'serif'],
        },
      },
    },
    plugins: [],
  };
  