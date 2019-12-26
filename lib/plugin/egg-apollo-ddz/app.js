'use strict';

const assert = require('assert');

class ConfigClient {
  constructor(config) {
    this.config = config;
  }

  async getConfig() {
    await Promise.race([
      new Promise(resolve => setInterval(() => this.config && resolve(), 10)),
      new Promise((resolve, reject) => setTimeout(() => reject(new Error('wait for config timeout')), 5000)),
    ]);
    return this.config;
  }

  setConfig(config) {
    this.config = config;
  }
}

async function createOneClient(config, app) {

  const client = new ConfigClient(app);

  app.messenger.once('configClient', config => {
    console.log('egg-apollo-ddz app.messenger.once 设置配置');
    client.setConfig(config);
  });

  app.beforeStart(async () => {
    const config = await client.getConfig();
    console.log('egg-apollo-ddz beforeStart 获取配置', config);
    assert(config);
  });

  return client;
}

module.exports = app => {
  app.addSingleton('configClient', createOneClient);
};
