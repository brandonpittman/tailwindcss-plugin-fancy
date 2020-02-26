const plugin = require('tailwindcss/plugin');
const parser = require('./parser');
const fs = require('fs');
const path = require('path');

function reducer(acc, p) {
	const name = path.basename(p, '.svg');
	const content = fs.readFileSync(p).toString();

	acc[`.${name}`] = {
		backgroundImage: parser(content)
	};

	return acc;
}

module.exports = plugin.withOptions((options = {
	variants: []
}) => {
	return function ({addUtilities}) {
		const result = require('./paths')();
		const utilities = result.reduce(reducer, {});
		addUtilities(utilities, options.variants);
	};
});
