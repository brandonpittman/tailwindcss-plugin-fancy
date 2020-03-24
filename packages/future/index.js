const plugin = require('tailwindcss/plugin');

module.exports = plugin(({addUtilities, addComponents, e, theme}) => {
  addUtilities({
    '.keep-all': {
      'word-break': 'break-all'
    }
  });

  const durations = Object.entries(theme('transitionDuration'));
  const delays = {
    '.delay-none': {
      transitionDelay: '0s'
    }
  };

  for (const [prop, value] of durations) {
    delays[`.delay-${prop}`] = {
      transitionDelay: value
    };
  }

  addUtilities(delays, ['responsive']);

  const spacing = Object.entries(theme('spacing'));

  for (const [prop, value] of spacing) {
    addComponents({
      '@variants responsive': {
        [`.space-y-${e(prop)} > * + *`]: {
          marginTop: value
        }
      }
    }, ['responsive']);

    addComponents({
      '@variants responsive': {
        [`.space-x-${e(prop)} > * + *`]: {
          marginLeft: value
        }
      }
    }, ['responsive']);
  }
}, {});
