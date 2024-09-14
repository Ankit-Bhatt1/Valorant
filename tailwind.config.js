/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        valorant: ['Valorant', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        '*': { boxSizing: 'border-box' },
        '*::before': { boxSizing: 'border-box' },
        '*::after': { boxSizing: 'border-box' },
      });
    },
  ],
};
