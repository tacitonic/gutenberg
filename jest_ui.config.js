/** @flow
 * @format */

const main = require( './jest.config.js' );

module.exports = {
	...main,
	setupFiles: [],
	testRegex: '__device-tests__/.*\\.test\\.(js|jsx)$',
	testPathIgnorePatterns: [
		'/node_modules/',
		'<rootDir>/gutenberg/gutenberg-mobile/',
		'/gutenberg/test/',
		'/gutenberg/packages/',
	],
};
