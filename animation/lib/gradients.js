const _ = require('lodash')

module.exports = function ({theme, e}) {
  var gradients = {}

  _.map(theme('gradients', {}), (gradient, name) => {
    const type = _.isPlainObject(gradient) && gradient.hasOwnProperty('type') ? gradient.type : 'linear'
    const direction = _.isPlainObject(gradient) && gradient.hasOwnProperty('direction') ? gradient.direction : 'to right'
    const colors = _.isPlainObject(gradient) ? (gradient.colors || []) : gradient

    gradients[`.bg-${e(name)}`] = {
      backgroundImage: `${type}-gradient(${direction}, ${colors.join(', ')})`
    }
  })

  return gradients
}
