var path = require('path');

module.exports = {
  resolve: {
    alias: {
      Api: path.resolve(__dirname, 'cypress/support/api'),
      Helper: path.resolve(__dirname, 'cypress/support/helper'),
      Obj: path.resolve(__dirname, 'cypress/support/obj'),
      Fixtures: path.resolve(__dirname, 'cypress/fixtures'),
      Plugins: path.resolve(__dirname, 'cypress/plugins'),
    },
  },
};
