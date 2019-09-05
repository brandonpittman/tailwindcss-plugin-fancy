const postcss = require('postcss')

module.exports = function ({addComponents, addUtilities, addVariant, theme, variants, e}) {
  require("tailwindcss-plugin-transitions")({addUtilities, variants});
  require("tailwindcss-plugin-content")({addUtilities, addVariant, e});
  require("tailwindcss-plugin-aspect")({addUtilities, variants});
  require("tailwindcss-plugin-current-color")({addUtilities});
  require("tailwindcss-plugin-prefers-color-scheme")({addVariant, e});
  require("@tailwindcss/custom-forms")({addUtilities, addComponents, theme, postcss})
}

