const content = require('tailwindcss-plugin-content')

module.exports = {
  config: {
    ...require('tailwindcss-plugin-prefers-color-scheme').config,
    ...content.config
  },
  handler(bagOfCrap) {
    content.handler(bagOfCrap);
    require('tailwindcss-plugin-animated')(bagOfCrap);
    require('tailwindcss-plugin-transitions')(bagOfCrap);
    require('tailwindcss-plugin-aspect')(bagOfCrap);
    require('tailwindcss-plugin-decoration')(bagOfCrap);
    require('@tailwindcss/custom-forms')(bagOfCrap);
  }
};
