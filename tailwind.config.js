/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 3px 6px rgb(0 0 0 / 16%)",
        "4xl": "0px -6px 6px rgb(0 0 0 / 16%)",
        "5xl": "0px 8px 6px rgb(0 0 0 / 16%)",
      },
      colors: {
        first: "#d82819",
        second: "#A70000",
        dark: {
          1: "#431717",
          2: "#611919",
        },
        light: {
          1: "#FFFFFF",
          2: "#C5C5C5",
          3: "#707070",
          4: "#F3F3F3",
        },
        fontColor: {
          1: "#AF8888",
          2: "#000",
          3: "#fff",
          4: "#707070",
        },
      },
      screens: {
        "3xl": "2400px",
        xs: "400px",
      },
    },
  },
  plugins: [],
};
