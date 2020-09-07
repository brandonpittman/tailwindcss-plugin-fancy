const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

const delayReducer = (acc, cur) => ({
  ...acc,
  [`.animate-delay-${cur[0]}`]: {
    animationDelay: cur[1],
  },
});

const delays = Object.entries(defaultTheme.transitionDelay).reduce(
  delayReducer,
  {}
);

module.exports = plugin(({ addUtilities }) => {
  addUtilities(
    {
      ".debug": {
        border: "1px solid red",
      },
      ...delays,
    },
    ["responsive"]
  );
}, {});
