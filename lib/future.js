module.exports = function ({addUtilities, theme}) {
  let spacing = Object.entries(theme('spacing'))

  for (let [prop, value] of spacing) {
    addUtilities({
      [`.space-y-${prop} > * + *`]: {
        marginTop: value,
      }
    }, ['responsive'])

    addUtilities({
      [`.space-x-${prop} > * + *`]: {
        marginLeft: value,
      }
    }, ['responsive'])
  }
}
