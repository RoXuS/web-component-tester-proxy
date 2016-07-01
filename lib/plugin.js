'use strict';

let proxy = require('express-http-proxy');

module.exports = (emitter, pluginOptions) => {
  emitter.hook('prepare:webserver', (express, done) => {
    if (pluginOptions.routes) {
      Object.keys(pluginOptions.routes).forEach(from => {
        express.use(from, proxy(pluginOptions.routes[from]));
      });
    }
    done();
  });
};
