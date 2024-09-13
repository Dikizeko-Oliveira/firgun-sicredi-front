import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: "var(--font-inter)",
            },
            gridTemplateRows: {
                app: "min-content max-content",
            },
            gridTemplateColumns: {
                app: "1fr 2fr",
                double: "2fr 1fr",
                triple: "1fr 2fr 1fr",
            },
            backgroundColor: {
                app: "#F5F5F5",
                primary: "#3FA110",
                secondary: "#786B38",
                button: "#D7E6C8",
                third: "#5A645A",
                overlay: "#323C32",
                error: "#ED5A6C",
            },
            colors: {
                app: "#F5F5F5",
                primary: "#3FA110",
                secondary: "#5A645A",
                third: "#323C32",
                button: "#D7E6C8",
                error: "#ED5A6C",
            },
        },
    },
};
export default config;
