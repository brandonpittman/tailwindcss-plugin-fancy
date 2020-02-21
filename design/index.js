const plugin = require('tailwindcss/plugin')

function addNewComponent(addComponents, key, value) {
  addComponents({
    [`@media(prefers-color-scheme: light)`]: {
      [`.text-${key}`]: {
        color: value[0],
      },
      [`.text-on-${key}`]: {
        color: value[1],
      },
      [`.bg-${key}`]: {
        backgroundColor: value[0],
      },
    },
  })

  if (value.length > 2) {
    addComponents({
      [`@media(prefers-color-scheme: dark)`]: {
        [`.text-${key}`]: {
          color: value[2],
        },
        [`.bg-${key}`]: {
          backgroundColor: value[2],
        },
      },
    })
  }

  if (value.length > 3) {
    addComponents({
      [`@media(prefers-color-scheme: dark)`]: {
        [`.text-on-${key}`]: {
          color: value[3],
        }
      },
    })
  }

}

module.exports = plugin(function ({addComponents, addUtilities, addVariant, theme, e}) {
  let {
    text,
    color
  } = theme('design') || {text: {}, color: {}}

  if (Object.keys(text).length > 0) {
    for (let [key, value] of Object.entries(text)) {
      addComponents({
        [`.text-${key}`]: {
          ...value
        }
      })
    }
  }

  if (Object.keys(color).length > 0) {
    for (let [key, value] of Object.entries(color)) {
      addNewComponent(addComponents, key, value)
    }
  }
})
