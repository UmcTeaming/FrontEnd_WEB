/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#527FF5",
        mainDeepColor: "#033FFF",
        mainMoreDeepColor: "#194AC2",
      },
    },
  },
  plugins: [],
};
