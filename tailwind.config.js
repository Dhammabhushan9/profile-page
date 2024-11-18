/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          700:"#002a5a",
        },
        green:{
          700:"#7f95ac",
        },
        skyblue:{
          700:"#183f6a"
        }
      }
    },
  },
  plugins: [],
}