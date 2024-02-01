/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: { 
        'dark': '#1E1E1E',
        'light': '#F2F2F2',       

        // Gradient of Purple
        'primary-darkest': '#4B0082',
        'primary': '#663399',
        'primary-lightest': '#8A2BE2',

        // Accent Colors
        coral: '#FF6F61',

        // Optional Neutral Gray
        gray: '#808080',
      },
    },
  },
  plugins: [],
};
