const plugin = require("tailwindcss/plugin");
const aspect = require("./packages/aspect");
const content = require("./packages/content");
const decoration = require("./packages/decoration");
const future = require("./packages/future");
const scrollbars = require("./packages/scrollbars");

module.exports = plugin.withOptions(
  () => {
    return function (bagOfCrap) {
      content.handler(bagOfCrap);
      future.handler(bagOfCrap);
      scrollbars.handler(bagOfCrap);
      aspect.handler(bagOfCrap);
      decoration.handler(bagOfCrap);
    };
  },
  (_options = {}) => {
    return {
      variants: {
        ...content.config.variants,
      },
      theme: {
        extend: {},
      },
    };
  }
);

module.exports.aspect = aspect;
module.exports.content = content;
module.exports.decoration = decoration;
module.exports.future = future;
module.exports.scrollbars = scrollbars;
