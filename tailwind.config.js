module.exports = {
  theme: {
    // ...
    extend: {
      colors: {
        primary: "#21E1FF",
      },
      fontFamily: {
        mono: "Ubuntu Mono, monospace",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
