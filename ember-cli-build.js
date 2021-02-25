'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { Webpack } = require('@embroider/webpack');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    'ember-cli-string-helpers': {
      only: ['camelize'],
      // except: ['titleize', 'capitalize'],
    },
  });
  // return app.toTree();
  const { Webpack } = require('@embroider/webpack');
  return require('@embroider/compat').compatBuild(app, Webpack);
};
