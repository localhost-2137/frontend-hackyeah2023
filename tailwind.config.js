/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "button-add1": "0px 2px 0px 0px ##0b736e7e",
      },
    },
    colors: {
      dark: {
        900: "#132326",
        700: "#233B40",
        500: "#365359",
        300: "#4B6C73",
        100: "#62858C",
      },
      add1: {
        900: "#003331",
        700: "#00403D",
        500: "#005955",
        300: "#0B736E",
        100: "#0E8C87",
      },
      add2: {
        900: "#591620",
        700: "#731D2A",
        500: "#8C2333",
        300: "#B22D41",
        100: "#CC334A",
      },
      add3: {
        900: "#605C44",
        700: "#99946B",
        500: "#B3AF8F",
        300: "#CCC9AD",
        100: "#E5E3CF",
      },
    },
  },
  plugins: [],
};

