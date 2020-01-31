// reach in a pull out the graphana toolkit config so that we can modify it and extend it
//
// This setup at this time, does not take into account development and production builds
// @see grafana/toolkit/src/config/webpack.plugin.config.js options hash for more info
const GraphanaToolkitConfig = require('@grafana/toolkit/src/config/webpack.plugin.config.js');
const config = GraphanaToolkitConfig.getWebpackConfig({});

module.exports = config;

