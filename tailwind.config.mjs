/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      container: {
        center: true, // Centers the container
        padding: "1.5rem", // Default padding (adjust as needed)
        screens: {
          sm: "361px",
          md: "768px",
          mdl: "980px",
          lg: "1087px",
          xl: "1280px",
          "2xl": "1440px", // Customize your max width
        },
      },
    },
  },
  plugins: [],
};
