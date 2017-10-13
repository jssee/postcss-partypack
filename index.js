'use strict';

const postcss = require('postcss');

const PLUGINS = [
	{
		option: 'import',
		module: require('postcss-import')
	},
	{
		option: 'aspectRatio',
		module: require('postcss-aspect-ratio')
	},
	{
		option: 'extendRule',
		module: require('postcss-extend-rule')
	},
	{
		option: 'getColor',
		module: require('postcss-get-color')
	},
	{
		option: 'propertyLookup',
		module: require('postcss-property-lookup')
	},
	{
		option: 'rucksack',
		module: require('rucksack-css')
	}
	],
	DEFAULTS = {
		aspectRatio: true,
		extendRule: true,
		getColor: true,
		import: true,
		propertyLookup: true,
		rucksack: true
	};

// Export plugin bundle
module.exports = postcss.plugin('postcss-partypack', opts => {
	opts = opts || {};

	let config = Object.assign({}, DEFAULTS, opts),
		bundle = postcss();

	PLUGINS.forEach(plugin => {
		config[plugin.option] && bundle.use(plugin.module);
	});

	return bundle;
});
