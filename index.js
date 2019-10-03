const postcss = require('postcss')

module.exports = function ({addComponents, addUtilities, addVariant, theme, variants, e}) {
  require("tailwindcss-plugin-animated")({addUtilities, addComponents, e, theme, variants});
  require("tailwindcss-plugin-transitions")({addUtilities, variants});
  require("tailwindcss-plugin-content")({addComponents, addUtilities, addVariant, e});
  require("tailwindcss-plugin-aspect")({addUtilities, variants});
  require("tailwindcss-plugin-decoration")({addUtilities, variants, theme});
  // extending the screen key on theme is a far better option---putting this on hold
  // require("tailwindcss-plugin-prefers-color-scheme")({addVariant, e});
  require("@tailwindcss/custom-forms")({addUtilities, addComponents, theme, postcss})
}

