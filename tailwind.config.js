/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#52dd87",
        focus: "#4BC375",
        secondary: "#87d155",
        accent: "#f91894",
        neutral: "#261c2c",
        based: "#f4f3f7",
        info: "#9ab3ef",
        success: "#16b15e",
        warning: "#f1b05b",
        error: "#e1376d",
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
