/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // grandinho
        xs: "425px",
        gr: "879px",
      },
      colors: {
        section: "#E7F4FA",
      },
      fontFamily: {
        sans: ["var(--font-roboto)"],
        heading: ["var(--font-lora)"],
        display: ["var(--font-cinzel)"],
        decorative: ["var(--font-comforter)"],
      },
    },
  },
  plugins: [],
};
