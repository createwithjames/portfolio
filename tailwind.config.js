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
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: "#21E1FF",
              textDecoration: "none",
              "&:hover": {
                color: "#21E1FF",
                textDecoration: "underline",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
