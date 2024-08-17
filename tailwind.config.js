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
      fontSize: {
        h1: ["100px", { lineHeight: "96px", fontWeight: "700" }],
        h2: ["55px", { lineHeight: "60px", fontWeight: "500" }],
        h3: ["24px", { lineHeight: "30px", fontWeight: "700" }],
        paragraph1: ["18px", { lineHeight: "28px", fontWeight: "500" }],
        paragraph2: ["16px", { lineHeight: "24px", fontWeight: "400" }],
        paragraph3: ["20px", { lineHeight: "26px", fontWeight: "500" }],
      },
      fontFamily: {
        playFair: ["Playfair Display", "DM Sans"],
      },
    },
  },
  plugins: [],
};
