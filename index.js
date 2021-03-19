const plugin = require("tailwindcss/plugin");
const content = require("./packages/content");
const decoration = require("./packages/decoration");
const future = require("./packages/future");
const scrollbars = require("./packages/scrollbars");
const animate = require("./packages/animate");

const plugins = [content, future, scrollbars, decoration, animate];

module.exports = plugin(
  (helpers) => {
    plugins.forEach((plugin) => plugin.handler(helpers));
  },
  {
    variants: {
      ...content.config.variants,
      ...animate.config.variants,
    },
    theme: {
      extend: {
        transitionDelay: {
          2000: "2000ms",
          3000: "3000ms",
          4000: "4000ms",
          5000: "5000ms",
        },
        transitionDuration: {
          2000: "2000ms",
          3000: "3000ms",
          4000: "4000ms",
          5000: "5000ms",
        },
        minWidth: (theme) => theme("width"),
        maxWidth: (theme) => theme("width"),
        minHeight: (theme) => theme("height"),
        maxHeight: (theme) => theme("height"),
        ...animate.config.theme,
      },
    },
  }
);

module.exports.content = content;
module.exports.decoration = decoration;
module.exports.future = future;
module.exports.scrollbars = scrollbars;
module.exports.animate = animate;
