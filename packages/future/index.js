const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addUtilities, theme, e }) => {
  const delays = Object.fromEntries(
    Object.entries(theme("transitionDelay")).map(([k, v]) => [
      `.animate-delay-${k}`,
      { animationDelay: v },
    ])
  );

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
      ...delays,
      ...basises,
    },
    ["responsive"]
  );
}, {});
