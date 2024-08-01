/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/**/*.css"],
  theme: {
    extend: {
      colors: {
        "custom-header-bg-color": "#445D67",
        "custom-lighter-pink": "#FDE3E3",
        "custom-darker-pink": "F27171",
      },
      borderWidth: {
        32: "32px",
      },
    },
  },
  plugins: [],
};
