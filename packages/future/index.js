const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addUtilities, theme, e }) => {
  const basises = Object.fromEntries(
    Object.entries(theme("width")).map(([k, v]) => [
      `.${e(`basis-${k}`)}`,
      { flexBasis: v },
    ])
  );

  addUtilities(
    {
      ".debug": {
        border: `1px solid ${theme("colors.red['600']")}`,
      },
      ...basises,
    },
    ["responsive"]
  );
});
