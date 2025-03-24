/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ocean-blue": "#1a5276",
        "sunset-orange": "#f39c12",
        "deep-sea": "#154360",
      },
      fontFamily: {
        marker: ['"Permanent Marker"', "cursive"],
      },
    },
  },
  plugins: [],
};
