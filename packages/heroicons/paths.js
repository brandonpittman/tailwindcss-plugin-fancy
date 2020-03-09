const globby = require('globby');

module.exports = () => {
	return globby.sync([`${__dirname}/icons`]);
};
