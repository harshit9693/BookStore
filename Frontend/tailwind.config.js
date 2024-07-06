/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),require('flowbite/plugin')],
}

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   darkMode: 'class', // Add this line to enable dark mode class strategy
//   plugins: [
//     require('daisyui'),
//     require('flowbite/plugin'),
//   ],
//   daisyui: {
//     themes: ["light", "dark"], // Optional: you can customize the themes here
//   },
// }
