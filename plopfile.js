const testGenerator = require('./plop_templates/test_generator.js');
const rclGenerator = require('./plop_templates/rcl/generator.js');

module.exports = function (plop) {
  plop.setGenerator('create-test', testGenerator);
  plop.setGenerator('create-rcl-component', rclGenerator);
};
