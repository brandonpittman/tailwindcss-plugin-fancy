const plugin = require('tailwindcss/plugin')
const content = require('tailwindcss-plugin-content')
const design = require('tailwindcss-plugin-design')

module.exports = plugin(function (bagOfCrap) {
  content.handler(bagOfCrap)
  require('tailwindcss-plugin-animated').handler(bagOfCrap);
  require('tailwindcss-plugin-aspect').handler(bagOfCrap);
  require('tailwindcss-plugin-decoration').handler(bagOfCrap);
  require('@tailwindcss/custom-forms')(bagOfCrap);
}, {
  ...content.config,
  ...design.config
})
