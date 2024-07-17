/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'customBlack': '#0F0F0F',
        'customGray': '#191A1C',
        'customWhite': '#F1F1F1',
        'customBorder': '#2A2C2F',
        'customPurple': '#AB41F0',
        'customYellow': '#E9C93F'
      }
    },
  },
  plugins: [],
};
