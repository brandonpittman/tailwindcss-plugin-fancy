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

const widthReducer = (e) => (acc, cur) => ({
  ...acc,
  [`.${e(`basis-${cur[0]}`)}`]: {
    flexBasis: cur[1],
  },
});


module.exports = plugin(({ addUtilities, e }) => {
  addUtilities(
    {
      ".debug": {
        border: "1px solid red",
      },
      ...delays,
      ...Object.entries(defaultTheme.width).reduce(
        (acc, cur) => widthReducer(e)(acc, cur),
        {}
      ),
    },
    ["responsive"]
  );
}, {});
