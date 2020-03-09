const globby = require('globby');
const pkgDir = require('pkg-dir');

module.exports = () => {
	return globby.sync([`${pkgDir.sync(__dirname)}/icons`]);
};
