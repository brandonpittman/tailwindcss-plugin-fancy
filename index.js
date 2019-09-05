module.exports = function ({addUtilities, addVariant, variants, e}) {
  require("tailwindcss-plugin-content")({addUtilities, addVariant, e});
  require("tailwindcss-plugin-aspect")({addUtilities, variants});
  require("tailwindcss-plugin-current-color")({addUtilities});
  require("tailwindcss-plugin-prefers-color-scheme")({addVariant, e});

}
