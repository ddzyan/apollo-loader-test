'use strict';
const path = require('path');

/** @type Egg.EggPlugin */
exports.apolloDdz = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-apollo-ddz'),
  // package: 'egg-apollo-ddz',
};
