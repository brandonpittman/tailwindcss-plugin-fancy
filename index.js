const plugin = require('tailwindcss/plugin')
const content = require('./content')
const design = require('./design')
const future = require('./future')
const animation = require('./animation')
const aspect = require('./aspect')
const decoration = require('./decoration')

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
