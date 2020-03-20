const plugin = require('tailwindcss/plugin');

module.exports = plugin(({addComponents, e, theme}) => {
	addComponents({
		'.keep-all': {
			'word-break': 'break-all'
		}
	});

	const spacing = Object.entries(theme('spacing'));

	for (const [prop, value] of spacing) {
		addComponents({
			[`.space-y-${e(prop)} > * + *`]: {
				marginTop: value
			}
		}, ['responsive']);

		addComponents({
			[`.space-x-${e(prop)} > * + *`]: {
				marginLeft: value
			}
		}, ['responsive']);
	}
}, {});
