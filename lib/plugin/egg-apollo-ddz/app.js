'use strict';

module.exports = app => {
  app.addSingleton('configClient', config => {
    Object.assign(app.config, config);
    console.log('configClient :', config);
  });
};
