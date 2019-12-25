'use strict';

class AppBootHook {
  constructor(app) {
    app.messenger.once('configClient', config => {
      console.log('configClient :', config);
      Object.assign(app.config, config);
      console.log('configClient :', config);
    });
    this.app = app;
  }

  configWillLoad() {
    // Ready to call configDidLoad,
    // Config, plugin files are referred,
    // this is the last chance to modify the config.
    console.log('configWillLoad config :', this.app.configTest);
  }

  configDidLoad() {
    // Config, plugin files have been loaded.
    console.log('configDidLoad config :', this.app.configTest);
  }

  async didLoad() {
    // All files have loaded, start plugin here.
    console.log('didLoad config :', this.app.configTest);
  }

  async willReady() {
    // All plugins have started, can do some thing before app ready
    console.log('willReady config :', this.app.configTest);
  }

  async didReady() {
    // Worker is ready, can do some things
    // don't need to block the app boot.
    console.log('didReady config :', this.app.configTest);
  }

  async serverDidReady() {
    // Server is listening.
    console.log('serverDidReady config :', this.app.configTest);
  }

  async beforeClose() {
    // Do some thing before app close.
  }
}

module.exports = AppBootHook;
