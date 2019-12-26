// test/app/controller/users.test.js
'use strict';
const { assert, app } = require('egg-mock/bootstrap');

describe('test/app/controller/users.test.js', () => {
  it('should work', async () => {
    // 通过 factory-girl 快速创建 user 对象到数据库中
    const result = await app.factory.createMany('user', 3);
    assert.ok(result);
  });
});
