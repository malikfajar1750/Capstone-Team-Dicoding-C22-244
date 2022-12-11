/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./src/*.{js,jsx}", "./public/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg": "url('/images/Parenting-app.jpg')",
        "card-pic": "url('/images/pexels-dominika-roseclay-1166990.jpg')",
      },
      boxShadow: {
        custom:
          "box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
      },
    },
  },
  plugins: [],
};
