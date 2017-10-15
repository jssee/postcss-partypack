"use strict";

const postcss = require("postcss");

const PLUGINS = [
    {
      option: "import",
      module: require("postcss-import")
    },
    {
      option: "aspectRatio",
      module: require("postcss-aspect-ratio")
    },
    {
      option: "extendRule",
      module: require("postcss-extend-rule")
    },
    {
      option: "getColor",
      module: require("postcss-get-color")
    },
    {
      option: "propertyLookup",
      module: require("postcss-property-lookup")
    },
    {
      option: "responsiveType",
      module: require("postcss-responsive-type")
    },
    {
      option: "hexRGBA",
      module: require("postcss-hexrgba")
    },
    {
      option: "shorthand",
      module: require("postcss-short")
    },
    {
      option: "clearfix",
      module: require("postcss-clearfix")
    }
  ],
  DEFAULTS = {
    aspectRatio: true,
    extendRule: true,
    getColor: true,
    import: true,
    propertyLookup: true,
    clearfix: true,
    responsiveType: true,
    hexRGBA: true,
    shorthand: true
  };

// Export plugin bundle
module.exports = postcss.plugin("postcss-partypack", opts => {
  opts = opts || {};

  let config = Object.assign({}, DEFAULTS, opts),
    bundle = postcss();

  PLUGINS.forEach(plugin => {
    config[plugin.option] && bundle.use(plugin.module);
  });

  return bundle;
});
