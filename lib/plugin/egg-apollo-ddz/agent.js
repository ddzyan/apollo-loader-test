'use strict';

// agent.js
const sleep = timeout => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
};

module.exports = agent => {
  agent.messenger.on('egg-ready', async () => {
    console.log('模拟异步获取config配置');
    // 模拟异步获取配置
    await sleep(2);
    const config = require('./test.json');

    agent.messenger.sendToApp('configClient', config);
  });
};
