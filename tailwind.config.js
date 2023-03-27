/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "var(--citadel-brown-50)",
          100: "var(--citadel-brown-100)",
          200: "var(--citadel-brown-200)",
          300: "var(--citadel-brown-300)",
          400: "var(--citadel-brown-400)",
          500: "var(--citadel-brown-500)",
          600: "var(--citadel-brown-600)",
          700: "var(--citadel-brown-700)",
        },
      },

      gridTemplateColumns: {
        "main-layout-closed": "120px 1fr",
        "main-layout-open": "440px 1fr",
      },
    },
  },
  plugins: [],
};
