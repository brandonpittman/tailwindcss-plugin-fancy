const plugin = require('tailwindcss/plugin')
const content = require('tailwindcss-plugin-content')
const design = require('tailwindcss-plugin-design')
const skew = require('./lib/skew')
const inset = require('./lib/inset')

module.exports = plugin(function (bagOfCrap) {
  content.handler(bagOfCrap)
  design.handler(bagOfCrap)
  require('tailwindcss-plugin-animated').handler(bagOfCrap);
  require('tailwindcss-plugin-aspect').handler(bagOfCrap);
  require('tailwindcss-plugin-decoration').handler(bagOfCrap);
  require('@tailwindcss/custom-forms')(bagOfCrap);
  require('./lib/future.js')(bagOfCrap) // stuff like space-{x,y}-$spacing
}, {
  ...skew,
  ...inset,
  ...content.config,
  ...design.config
})
