// tailwind.config.js

module.exports = {
  // mode: 'jit', <--- Don't activate 'JIT' mode. Storybook is not playing well with it.
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // <--- Make sure you use the latest convention. Not the 'prune' one.
  plugins: [], // <---- Don't put Tailwind related plugins elsewhere but in this file. Notice that 'require('tailwindcss'), require('autoprefixer')' are not included in this array.
};