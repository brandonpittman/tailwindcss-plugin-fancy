const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addUtilities, variants }) => {
  addUtilities(
    {
      ".aspect-wide": {
        "padding-top": "56.25%",
      },
      ".aspect-square": {
        "padding-top": "100%",
      },
    },
    variants("aspect-ratio", ["responsive", "hover"])
  );
});
