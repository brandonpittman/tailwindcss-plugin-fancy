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
  theme: {
    extend: {
      inset: {
        "1/4": "25%",
        "1/3": "33.333333%",
        "2/3": "66.666666%",
        "1/2": "50%",
        "3/4": "75%",
        "full": "100%",
      },
      skew: {
        '0': '0deg',
        '1': '1deg',
        '2': '2deg',
        '3': '3deg',
        '4': '4deg',
        '5': '5deg',
        '10': '10deg',
        '15': '15deg',
        '20': '20deg',
        '90': '90deg',
        '-1': '-1deg',
        '-2': '-2deg',
        '-3': '-3deg',
        '-4': '-4deg',
        '-5': '-5deg',
        '-10': '-10deg',
        '-15': '-15deg',
        '-20': '-20deg',
        '-90': '-90deg',
      },
      screens: {
        dark: {raw: '(prefers-color-scheme: dark)'},
        light: {raw: '(prefers-color-scheme: light)'},
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'after', 'before', 'group-hover'],
    backgroundImage: ['responsive', 'hover', 'focus', 'after', 'before', 'group-hover'],
    borderColor: ['responsive', 'hover', 'focus', 'after', 'before'],
    borderRadius: ['responsive', 'hover', 'focus', 'after', 'before'],
    borderWidth: ['responsive', 'hover', 'focus', 'after', 'before'],
    display: ['responsive', 'hover', 'focus', 'after', 'before', 'group-hover'],
    height: ['responsive', 'hover', 'focus', 'after', 'before'],
    inset: ['responsive', 'hover', 'focus', 'after', 'before'],
    margin: ['responsive', 'hover', 'focus', 'after', 'before'],
    opacity: ['responsive', 'hover', 'focus', 'after', 'before', 'group-hover'],
    position: ['responsive', 'hover', 'focus', 'after', 'before'],
    textColor: ['responsive', 'hover', 'focus', 'after', 'before', 'group-hover'],
    width: ['responsive', 'hover', 'focus', 'after', 'before'],
    zIndex: ['responsive', 'hover', 'focus', 'after', 'before'],
    transform: ['responsive', 'hover', 'focus', 'after', 'before'],
    transformOrigin: ['responsive', 'hover', 'focus', 'after', 'before'],
    scale: ['responsive', 'hover', 'focus', 'after', 'before'],
    rotate: ['responsive', 'hover', 'focus', 'after', 'before'],
    translate: ['responsive', 'hover', 'focus', 'after', 'before'],
    transitionProperty: ['responsive', 'hover', 'focus', 'after', 'before'],
    transitionTimingFunction: ['responsive', 'hover', 'focus', 'after', 'before'],
    transitionDuration: ['responsive', 'hover', 'focus', 'after', 'before'],
  }
})
