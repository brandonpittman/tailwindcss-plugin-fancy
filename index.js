const plugin = require("tailwindcss/plugin");
const aspect = require("./packages/aspect");
const content = require("./packages/content");
const decoration = require("./packages/decoration");
const future = require("./packages/future");
const scrollbars = require("./packages/scrollbars");
const animate = require("./packages/animate");

const plugins = [content, future, scrollbars, aspect, decoration, animate];

module.exports = plugin(
  (helpers) => {
    plugins.forEach((plugin) => plugin.handler(helpers));
  },
  {
    variants: {
      ...content.config.variants,
    },
    theme: {
      extend: {
        minWidth: (theme) => theme("width"),
        maxWidth: (theme) => theme("width"),
        minHeight: (theme) => theme("height"),
        maxHeight: (theme) => theme("height"),
        ...animate.config.theme,
      },
    },
  }
);

module.exports.aspect = aspect;
module.exports.content = content;
module.exports.decoration = decoration;
module.exports.future = future;
module.exports.scrollbars = scrollbars;
module.exports.animate = animate;
