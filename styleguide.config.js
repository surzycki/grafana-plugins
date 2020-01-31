const path = require('path');
const webpackConfig = require('./webpack.config.js');

const rclBaseDir = './src/rcl';

const extensions = '{ts,tsx,js,jsx}';

module.exports = {
  title: 'Space RCL',
  sections: [
    {
      name: 'Introduction',
      content: `${rclBaseDir}/docs/Introduction.md`
    },
    {
      name: 'Atoms',
      content: `${rclBaseDir}/docs/Atoms.md`,
      components: `${rclBaseDir}/components/Atoms/*/index.${extensions}`,
    },
    {
      name: 'Molecules',
      content: `${rclBaseDir}/docs/Molecules.md`,
      components: `${rclBaseDir}/components/Molecules/*/index.${extensions}`,
    },
  ]
}
