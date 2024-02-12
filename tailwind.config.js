/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "purple-1":"#6c25ff",
      "purple-2":"#cebafb",
      "main-colour":"#f3f4f6",
      "black-1":"#9ca3af",
      "black-2":"#000"
    }
  },
  plugins: [],
}