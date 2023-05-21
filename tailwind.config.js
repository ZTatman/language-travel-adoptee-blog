/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // https://css-tricks.com/clamp-its-a-little-bit-of-max-min-and-a-little-bit-of-responsive-neat/
      // https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/
      // https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/
      margin: {
        "clamp-1": "clamp(2rem, 5vw, 4rem)",
        "clamp-2": "clamp(4rem, 10vw, 8rem)",
        "clamp-3": "clamp(6rem, 15vw, 12rem)",
        "clamp-4": "clamp(8rem, 20vw, 16rem)",
        "clamp-5": "clamp(10rem, 25vw, 20rem)",
        "clamp-6": "clamp(12rem, 30vw, 24rem)",
        "clamp-7": "clamp(14rem, 35vw, 28rem)",
        "clamp-8": "clamp(16rem, 40vw, 32rem)",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        heading: ["var(--font-lora)"],
        display: ["var(--font-cinzel)"],
        decorative: ["var(--font-comforter)"],
      },
      colors: {
        section: "#E7F4FA",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      // borderRadius: {
      //   lg: "var(--radius)",
      //   md: "calc(var(--radius) - 2px)",
      //   sm: "calc(var(--radius) - 4px)",
      // },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/line-clamp")],
};
