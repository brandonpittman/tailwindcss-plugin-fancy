const _ = require('lodash');

module.exports = function ({theme, e}) {
	const gradients = {};

	_.map(theme('gradients', {}), (gradient, name) => {
		const type = _.isPlainObject(gradient) && Object.prototype.hasOwnProperty.call(gradient, 'type') ? gradient.type : 'linear';
		const direction = _.isPlainObject(gradient) && Object.prototype.hasOwnProperty.call(gradient, 'direction') ? gradient.direction : 'to right';
		const colors = _.isPlainObject(gradient) ? (gradient.colors || []) : gradient;

		gradients[`.bg-${e(name)}`] = {
			backgroundImage: `${type}-gradient(${direction}, ${colors.join(', ')})`
		};
	});

	return gradients;
};
