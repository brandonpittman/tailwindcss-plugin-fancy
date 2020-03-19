const plugin = require('tailwindcss/plugin');

module.exports = plugin(({addUtilities, e, theme}) => {
	addUtilities({
		'.keep-all': {
			'word-break': 'break-all'
		}
	});

	const spacing = Object.entries(theme('spacing'));

	for (const [prop, value] of spacing) {
		addUtilities({
			[`.space-y-${e(prop)} > * + *`]: {
				marginTop: value
			}
		}, ['responsive']);

		addUtilities({
			[`.space-x-${e(prop)} > * + *`]: {
				marginLeft: value
			}
		}, ['responsive']);
	}
}, {});
