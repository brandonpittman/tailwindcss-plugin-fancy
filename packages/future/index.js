const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addUtilities }) => {
  addUtilities({
    ".debug": {
      border: "1px solid red",
    },
  });
}, {});
