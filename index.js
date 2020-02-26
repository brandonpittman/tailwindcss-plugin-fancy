const plugin = require('tailwindcss/plugin');
const animated = require('./packages/animated');
const aspect = require('./packages/aspect');
const content = require('./packages/content');
const decoration = require('./packages/decoration');
const design = require('./packages/design');
const future = require('./packages/future');
const forms = require('@tailwindcss/custom-forms');

module.exports = plugin(bagOfCrap => {
	content.handler(bagOfCrap);
	design.handler(bagOfCrap);
	future.handler(bagOfCrap);
	animated.handler(bagOfCrap);
	aspect.handler(bagOfCrap);
	decoration.handler(bagOfCrap);
	forms(bagOfCrap);
}, {
	variants: {
		...content.config.variants
	},
	theme: {
		extend: {
			...future.config.theme.extend,
			screens: {
				...design.config.theme.extend.screens
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
