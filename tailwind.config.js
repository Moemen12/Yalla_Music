/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "logo-color": "#D41159",
        "music-title": "#828590",
      },
      backgroundColor: {
        "special-btn": "#D41159",
        "card-color": "#363656",
        "main-back": "#212237",
        "cancel-color": "rgb(69 75 116 / 98%)",
      },
      backgroundImage: {
        "header-image": "url('/public/assets/images/background/main-bg.svg')",
        "auth-image": "url('/public/assets/images/background/auth.svg')",
      },
      fontFamily: {
        // cairo: "'Cairo', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
