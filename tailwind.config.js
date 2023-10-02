/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
export const darkMode = ["class"];
export const content = [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
];
export const theme = {
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
        backgroundSize: {
            'size-200': '200% 200%',
            'size-400': '400% 400%',
        },
        backgroundPosition: {
            'pos-0': '0% 0%',
            'pos-100': '100% 100%',
        },
        borderRadius: {
            egg_1: "79% 21% 67% 33% / 40% 70% 30% 60%",
            egg_2: "49% 44% 44% 47% / 55% 47% 53% 43%"
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
            "background": {
                "0%": { backgroundPosition: "0% 50%" },
                "50%": { backgroundPosition: "100% 50%" },
                "100%": { backgroundPosition: "0% 50%" },
            }
        },
        animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
            "background": "background 4s ease-in-out infinite"
        },
        textShadow: {
            DEFAULT: '0 0 rgb(0 0 0),.06em 0 0 rgba(255,255,255,.7),0 .05em 0 rgba(255,255,255,.7),-.06em 0 0 rgba(255,255,255,.7)',
        },
    },
};
export const plugins = [
    require("tailwindcss-animate"),
    plugin(function({ matchUtilities, theme }) {
        matchUtilities(
            {
                'text-shadow': (value) => ({
                    textShadow: value,
                }),
            },
            { values: theme('textShadow') }
        );
    }),
];
