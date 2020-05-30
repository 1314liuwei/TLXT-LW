var Sequelize = require('sequelize');

var config = {
    database: 'tlxt_system_db', // 数据库
    username: 'root', // 用户名
    password: 'tlxt8888', // 密码
    host: '125.64.98.147', // 主机名
    port: 3306 // 端口号，MySQL默认3306
};

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host:config.host,
    dialect:'mysql',
    pool: {
          max: 5,
          min: 0,
          idle: 30000
     }
  });

  module.exports = sequelize;