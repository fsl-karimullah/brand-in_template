/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#AD343E",
        secondary: "#474747",
        tertary: "#2C2F24",
        bgSecondary: "#F9F9F7",
      },
    },
  },
  plugins: [],
};
