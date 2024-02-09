/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                customOrange: "#E65F2B",
                sidebarBg: "#303030",
                primary: "#EBDFD7",
                secondary: "#303030",
            },
        },
    },
    plugins: [],
};
