/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // "gray-border": "#34384C",
        // "modal-bg": " #141518",
        // gcb_gold: "#EDAE49",
        "logo-color": "#D41159",
        "music-title": "#828590",
      },
      backgroundColor: {
        "special-btn": "#D41159",
      },
      backgroundImage: {
        "header-image": "url('/public/assets/images/background/main-bg.jpg')",
        "auth-image": "url('/public/assets/images/background/login.png')",
      },
      fontFamily: {
        // cairo: "'Cairo', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
