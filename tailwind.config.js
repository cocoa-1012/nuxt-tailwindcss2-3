const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sourceCodePro: ["Source Code Pro", "monospace"],
        publicSans: ["Public Sans", "sans-serif"]
      },
      colors: {
        cyan: colors.cyan
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
