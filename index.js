// Module.exports = bagOfCrap => {
//   require("tailwindcss-plugin-animated")(bagOfCrap)
//   require("tailwindcss-plugin-transitions")(bagOfCrap)
//   require("tailwindcss-plugin-content")(bagOfCrap)
//   require("tailwindcss-plugin-aspect")(bagOfCrap)
//   require("tailwindcss-plugin-decoration")(bagOfCrap)
//   require("@tailwindcss/custom-forms")(bagOfCrap)
// }

// This is what the plugin will look like when 1.2 goes live

module.exports = {
	...require('tailwindcss-plugin-prefers-color-scheme'),
	handler(bagOfCrap) {
		require('tailwindcss-plugin-animated')(bagOfCrap);
		require('tailwindcss-plugin-transitions')(bagOfCrap);
		require('tailwindcss-plugin-content')(bagOfCrap);
		require('tailwindcss-plugin-aspect')(bagOfCrap);
		require('tailwindcss-plugin-decoration')(bagOfCrap);
		require('@tailwindcss/custom-forms')(bagOfCrap);
	}
};
