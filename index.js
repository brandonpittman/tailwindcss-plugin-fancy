module.exports = function ({addComponents, addUtilities, addVariant, theme, variants, e, postcss}) {
  require("tailwindcss-plugin-animated")({addUtilities, addComponents, e, theme, variants});
  require("tailwindcss-plugin-transitions")({addUtilities, variants});
  require("tailwindcss-plugin-content")({addComponents, addUtilities, addVariant, e});
  require("tailwindcss-plugin-aspect")({addUtilities, variants});
  require("tailwindcss-plugin-decoration")({addUtilities, variants, theme});
  require("@tailwindcss/custom-forms")({addUtilities, addComponents, theme, postcss})
}

