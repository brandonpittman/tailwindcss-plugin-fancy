const plugin = require("tailwindcss/plugin");
const aspect = require("./packages/aspect");
const content = require("./packages/content");
const decoration = require("./packages/decoration");
const future = require("./packages/future");
const scrollbars = require("./packages/scrollbars");
const animate = require("./packages/animate");

module.exports = plugin.withOptions(
  () => {
    return function (helpers) {
      let plugins = [content, future, scrollbars, aspect, decoration, animate];
      plugins.forEach((plugin) => plugin.handler(helpers));
    };
  },
  (_options = {}) => {
    return {
      variants: {
        ...content.config.variants,
      },
      theme: {
        extend: {
          keyframes: {
            testing: {
              to: { opacity: 1 },
            },
          },
        },
      },
    };
  }
);

module.exports.aspect = aspect;
module.exports.content = content;
module.exports.decoration = decoration;
module.exports.future = future;
module.exports.scrollbars = scrollbars;
module.exports.animate = animate;
