const plugin = require('tailwindcss/plugin')
const content = require('tailwindcss-plugin-content')

module.exports = plugin(function (bagOfCrap) {
  content.handler(bagOfCrap)
  require('tailwindcss-plugin-animated').handler(bagOfCrap);
  require('tailwindcss-plugin-aspect').handler(bagOfCrap);
  require('tailwindcss-plugin-decoration').handler(bagOfCrap);
  require('@tailwindcss/custom-forms')(bagOfCrap);
}, {
  ...content.config,
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
      }
    },
  }
})
