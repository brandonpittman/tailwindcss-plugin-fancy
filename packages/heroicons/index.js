const plugin = require('tailwindcss/plugin')
const parser = require('./parser')
const fs = require('fs')
const path = require('path')
const paths = require('./paths')

function reducer(acc, p) {
  let name = path.basename(p, '.svg')
  let content = fs.readFileSync(p).toString()

  acc[`.${name}`] = {
    backgroundImage: parser(content)
  }

  return acc
}

module.exports = plugin.withOptions(function (options = {
  variants: []
}) {
  return function ({addUtilities}) {
    let result = require('./paths')()
    utilities = result.reduce(reducer, {})
    addUtilities(utilities, options.variants)
  }
})
