/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      lg: "1.333rem",
      xl: "1.777rem",
      "2xl": "2.369rem",
      "3xl": "3.157rem",
    },

    extend: {
      colors: {
        primary: {
          100: "rgb(var(--citadel-brown-100) / <alpha-value>)",
          200: "rgb(var(--citadel-brown-200) / <alpha-value>)",
          300: "rgb(var(--citadel-brown-300) / <alpha-value>)",
          400: "rgb(var(--citadel-brown-400) / <alpha-value>)",
          500: "rgb(var(--citadel-brown-500) / <alpha-value>)",
          600: "rgb(var(--citadel-brown-600) / <alpha-value>)",
          700: "rgb(var(--citadel-brown-700) / <alpha-value>)",
        },
      },

      backgroundImage: {
        "radial-main-gradient":
          "radial-gradient(60% 90% at 50% 0%, var(--tw-gradient-stops))",
      },

      gridTemplateColumns: {
        "main-layout-closed": "120px 1fr",
        "main-layout-open": "440px 1fr",
      },
    },
  },
  plugins: [],
};
