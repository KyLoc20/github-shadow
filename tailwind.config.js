/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {

        extend: {
            colors: {
                'black': {
                    DEFAULT: "#010409",
                    100: "#010409",
                    200: "#161b22",
                    300: "#0d1117",
                },
                'gray': {
                    DEFAULT: "#c9d1d9",
                    100: "#21262d",
                    200: "#c9d1d9",
                    300: "#8b9491",
                    400: "#30363d",
                    500: "#6e7681", //placeholder
                    600: "rgba(177,186,196,0.12)",
                    700: "#cdd9e4",
                    800: "#f0f6fc",
                    900: "rgba(255,255,255,0.7)",
                    1000: "rgba(104,104,104,1)", //scrollbar-thumb
                    1100: "rgba(66,66,66,1)", //scrollbar-track
                },
                "blue": {
                    DEFAULT: "#58a6ff",
                    100: "#58a6ff",
                },

            },
            fontSize: {
                xs: ['12px', '20px'],
                sm: ['14px', '21px'],
                base: ['16px', '24px'],
                lg: ['20px', '28px'],
                xl: ['24px', '32px'],
            },
            boxShadow: {
                "bottom": 'inset 0 -1px 0 #21262d',
                "timeline-left": 'inset 1px 0 0 #30363d',
            }
        },

    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('tailwind-scrollbar'),
    ],
}