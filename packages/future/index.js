const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addUtilities, theme, e }) => {
  const delayReducer = (acc, cur) => ({
    ...acc,
    [`.animate-delay-${cur[0]}`]: {
      animationDelay: cur[1],
    },
  });

  const widthReducer = (acc, cur) => ({
    ...acc,
    [`.${e(`basis-${cur[0]}`)}`]: {
      flexBasis: cur[1],
    },
  });

  const delays = Object.entries(theme("transitionDelay")).reduce(
    delayReducer,
    {}
  );

  const basises = Object.entries(theme("width")).reduce(widthReducer, {});

  addUtilities(
    {
      ".debug": {
        border: "1px solid red",
      },
      ...delays,
      ...basises,
    },
    ["responsive"]
  );
}, {});
