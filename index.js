'use strict';

const postcss = require('postcss');

const PLUGINS = [
  {
    option: 'extendRule',
    module: require('postcss-extend-rule'),
  },
  {
    option: 'family',
    module: require('postcss-family'),
  },
  {
    option: 'propertyLookup',
    module: require('postcss-property-lookup'),
  },
  {
    option: 'shorthand',
    module: require('postcss-short'),
  },
  {
    option: 'easings',
    module: require('postcss-easings'),
  },
];

const DEFAULTS = {
  extendRule: true,
  easings: true,
  family: true,
  propertyLookup: true,
  shorthand: true,
};

// Export plugin bundle
module.exports = postcss.plugin('postcss-partypack', opts => {
  opts = opts || {};

  let config = Object.assign({}, DEFAULTS, opts);
  let bundle = postcss();

  PLUGINS.forEach(plugin => {
    config[plugin.option] && bundle.use(plugin.module);
  });

  return bundle;
});
