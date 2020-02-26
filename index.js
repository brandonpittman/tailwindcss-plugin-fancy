const plugin = require('tailwindcss/plugin')
const content = require('./packages/content')
const design = require('./packages/design')
const future = require('./packages/future')
const animation = require('./packages/animated')
const aspect = require('./packages/aspect')
const decoration = require('./packages/decoration')

module.exports = plugin(function (bagOfCrap) {
  content.handler(bagOfCrap)
  design.handler(bagOfCrap)
  future.handler(bagOfCrap)
  animation.handler(bagOfCrap);
  aspect.handler(bagOfCrap);
  decoration.handler(bagOfCrap);
  require('@tailwindcss/custom-forms')(bagOfCrap);
}, {
  variants: {
    ...content.config.variants
  },
  theme: {
    extend: {
      ...future.config.theme.extend,
      screens: {
        ...design.config.theme.extend.screens
      }
    },
  },
})
