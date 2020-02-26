const plugin = require('tailwindcss/plugin');

module.exports = plugin(({addUtilities, theme}) => {
	const spacing = Object.entries(theme('spacing'));

	for (const [prop, value] of spacing) {
		addUtilities({
			[`.space-y-${prop} > * + *`]: {
				marginTop: value
			}
		}, ['responsive']);

		addUtilities({
			[`.space-x-${prop} > * + *`]: {
				marginLeft: value
			}
		}, ['responsive']);
	}
}, {
	theme: {
		extend: {
			inset: {
				'1/4': '25%',
				'1/3': '33.333333%',
				'2/3': '66.666666%',
				'1/2': '50%',
				'3/4': '75%',
				full: '100%'
			},
			skew: {
				0: '0deg',
				1: '1deg',
				2: '2deg',
				3: '3deg',
				4: '4deg',
				5: '5deg',
				10: '10deg',
				15: '15deg',
				20: '20deg',
				90: '90deg',
				'-1': '-1deg',
				'-2': '-2deg',
				'-3': '-3deg',
				'-4': '-4deg',
				'-5': '-5deg',
				'-10': '-10deg',
				'-15': '-15deg',
				'-20': '-20deg',
				'-90': '-90deg'
			}
		}
	}
});
