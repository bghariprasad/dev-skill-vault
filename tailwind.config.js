/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#191922",
        "bg-light": "#1C1E27",
        primary: "#854CE6",
        "primary-active": "#6136a9",
        "text-primary": "#F2F3F4",
        "text-secondary": "#b1b2b3",
      },
    },
    container: {
      center: true,
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
