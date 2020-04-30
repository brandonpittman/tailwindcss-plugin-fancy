const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities }) => {
  addUtilities({
    '.keep-all': {
      'word-break': 'break-all'
    }
  })
}, {})
