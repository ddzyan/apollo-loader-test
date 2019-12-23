'use strict';
const assert = require('assert');
const fs = require('fs');

function sleep(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time * 1000);
  });

}


class AppBootHook {
  constructor(agent) {
    this.agent = agent;
  }

  configWillLoad() {
    // Ready to call configDidLoad,
    // Config, plugin files are referred,
    // this is the last chance to modify the config.
  }

  configDidLoad() {
    // Config, plugin files have been loaded.
  }

  async willReady() {
    assert(this.agent.config.apolloDdz, 'apolloDdz config is required');
    await sleep(2);
    const config = require('./test.json');


    const configFilePath = __dirname + '/config/apollo-config.json';

    if (fs.existsSync(configFilePath)) {
      fs.unlinkSync(configFilePath);
    }
    const configStr = JSON.stringify(config);
    fs.appendFileSync(configFilePath, configStr);
    this.agent.coreLogger.info(`apollo 初始化完成${new Date()}`);
  }

  async didReady() {
    // Worker is ready, can do some things
    // don't need to block the app boot.
  }

  async serverDidReady() {
    // Server is listening.
  }

  async beforeClose() {
    // Do some thing before app close.
  }
}

module.exports = AppBootHook;
