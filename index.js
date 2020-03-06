const plugin = require('tailwindcss/plugin');
const animated = require('./packages/animated');
const aspect = require('./packages/aspect');
const content = require('./packages/content');
const decoration = require('./packages/decoration');
const design = require('./packages/design');
const future = require('./packages/future');
const heroicons = require('./packages/heroicons');
const ui = require('@tailwindcss/ui')();

module.exports = plugin.withOptions(() => {
	return function (bagOfCrap) {
		content.handler(bagOfCrap);
		design.handler(bagOfCrap);
		future.handler(bagOfCrap);
		animated.handler(bagOfCrap);
		aspect.handler(bagOfCrap);
		decoration.handler(bagOfCrap);
		ui.handler(bagOfCrap);
		heroicons({variants: ['responsive', 'hover', 'focus', 'active', 'group-hover']}).handler(bagOfCrap);
	};
}, _ => {
	return {
		variants: {
			...content.config.variants,
			...ui.config.variants
		},
		theme: {
			spacing: {...ui.config.theme.spacing},
			colors: {...ui.config.theme.colors},
			inset: (theme, options) => ({...ui.config.theme.inset(theme, options)}),
			maxWidth: (theme, options) => ({...ui.config.theme.maxWidth(theme, options)}),
			maxHeight: (theme, options) => ({...ui.config.theme.maxHeight(theme, options)}),
			customForms: (theme, options) => ({...ui.config.theme.customForms(theme, options)}),
			boxShadow: {...ui.config.theme.boxShadow},
			extend: {
				screens: {
					...design.config.theme.extend.screens
				}
			}
		}
	};
});

module.exports.animated = animated;
module.exports.aspect = aspect;
module.exports.content = content;
module.exports.decoration = decoration;
module.exports.design = design;
module.exports.future = future;
module.exports.heroicons = heroicons;

