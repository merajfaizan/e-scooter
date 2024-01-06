/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    fontFamily: {
      sans: ["Ubuntu", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#42454A",
        secondary: "#FE8B75",
        tertiary: "#8B938D",
        background: "#FAFAFA",
        overlay: "#DBDBDB",
      },
    },
  },
  plugins: [],
};
