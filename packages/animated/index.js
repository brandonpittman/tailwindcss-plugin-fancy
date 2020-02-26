const plugin = require('tailwindcss/plugin');

module.exports = plugin(({addUtilities, addComponents, e, theme, variants}) => {
	addUtilities({
		...require('./lib/sizes')
	}, ['responsive', 'hover']);

	addComponents({
		...require('./lib/shakes'),
		...require('./lib/spins'),
		...require('./lib/resizes'),
		...require('./lib/keyframes')({theme, e})
	}, ['responsive', 'hover']);

	addUtilities({
		...require('./lib/gradients')({theme, e})
	}, variants('gradients'), ['responsive', 'hover']);

	addUtilities({
		...require('./lib/animations')({theme, e})
	}, variants('animations'), ['responsive', 'hover']);
});
