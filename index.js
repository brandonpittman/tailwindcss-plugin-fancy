const plugin = require('tailwindcss/plugin');
const animated = require('./packages/animated');
const aspect = require('./packages/aspect');
const content = require('./packages/content');
const decoration = require('./packages/decoration');
const design = require('./packages/design');
const future = require('./packages/future');
const heroicons = require('./packages/heroicons');
const ui = require('@tailwindcss/ui')();

const spacing = {
  '0.5': '0.125rem',
  '1.5': '0.375rem',
  '2.5': '0.625rem',
  '3.5': '0.875rem',
  '7': '1.75rem',
  '9': '2.25rem',
  '11': '2.75rem',
  '13': '3.25rem',
  '14': '3.5rem',
  '15': '3.75rem',
  '28': '7rem',
  '36': '9rem',
  '60': '15rem',
  '72': '18rem',
  '80': '20rem',
  '96': '24rem',
  //'1/2': '50%',
  // '1/3': '33.333333%',
  // '2/3': '66.666667%',
  // '1/4': '25%',
  // '2/4': '50%',
  // '3/4': '75%',
  // '1/5': '20%',
  // '2/5': '40%',
  // '3/5': '60%',
  // '4/5': '80%',
  // '1/6': '16.666667%',
  // '2/6': '33.333333%',
  // '3/6': '50%',
  // '4/6': '66.666667%',
  // '5/6': '83.333333%',
  // '1/12': '8.333333%',
  // '2/12': '16.666667%',
  // '3/12': '25%',
  // '4/12': '33.333333%',
  // '5/12': '41.666667%',
  // '6/12': '50%',
  // '7/12': '58.333333%',
  // '8/12': '66.666667%',
  // '9/12': '75%',
  // '10/12': '83.333333%',
  // '11/12': '91.666667%',
}

module.exports = plugin.withOptions(function () {
  return function (bagOfCrap) {
    content.handler(bagOfCrap);
    design.handler(bagOfCrap);
    future.handler(bagOfCrap);
    animated.handler(bagOfCrap);
    aspect.handler(bagOfCrap);
    decoration.handler(bagOfCrap);
    ui.handler(bagOfCrap);
    heroicons({variants: ['responsive', 'hover', 'focus', 'active', 'group-hover']}).handler(bagOfCrap);
  }
}, function (options = {}) {
  return {
    variants: {
      ...content.config.variants,
      ...ui.config.variants
    },
    theme: {
      colors: {...ui.config.theme.colors},
      inset: (theme, options) => ({...ui.config.theme.inset(theme, options)}),
      maxWidth: (theme, options) => ({...ui.config.theme.maxWidth(theme, options)}),
      maxHeight: (theme, options) => ({...ui.config.theme.maxHeight(theme, options)}),
      customForms: (theme, options) => ({...ui.config.theme.customForms(theme, options)}),
      inset: theme => ({...ui.config.theme.inset(theme)}),
      boxShadow: {...ui.config.theme.boxShadow},
      extend: {
        ...future.config.theme.extend,
        spacing,
        screens: {
          ...design.config.theme.extend.screens
        }
      }
    }
  }
});

module.exports.animated = animated;
module.exports.aspect = aspect;
module.exports.content = content;
module.exports.decoration = decoration;
module.exports.design = design;
module.exports.future = future;
module.exports.heroicons = heroicons;
