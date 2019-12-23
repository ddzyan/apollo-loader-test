## 简介

本测试demo预计实现的内容为：
1. 异步获取动态配置信息，并且添加到 egg 的 config 对象中
2. 必须可以在 egg-sequlize 等插件之前添加，使数据库连接配置可以动态配置

这里采用延迟计时器读取本地配置，模拟动态加载配置信息


预期实现步骤为：
1. 在egg-apollo-ddz插件的agent.js获取配置信息
2. 添加到config/apollo-config.json中
3. 在 config/config.*.js文件中获取配置，并且返回


现有问题;
1. 项目启动直接报错：Cannot find module './apollo-config.json'
2. agent.js 中的生命周期函数，无法在 config 加载之前运行