const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({addUtilities, variants}) {
  addUtilities(
    {
      ".aspect-wide": {
        "padding-block-start": "56.25%"
      },
      ".aspect-square": {
        "padding-block-start": "100%"
      }
    },
    variants("aspect-ratio", ['responsive', 'hover'])
  );
})
