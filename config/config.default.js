'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1516278739611_7339';

  // add your config here
  config.middleware = [];
  
  config.view = {
      defaultViewEngine: 'nunjucks',
      mapping: {
          '.tpl': 'nunjucks',
      },
  };
    
    config.news = {
        pageSize: 5,
        serverUrl: 'https://hacker-news.firebaseio.com/v0',
    };
    
    // 中间件配置
    config.middleware = [
        'robot'
    ];
    
    config.robot = {
        ua: [
            /Baiduspider/i,
        ]
    };
    
    config.sequelize = {
        dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
        database: 'test',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: 'root',
    };
    
    
    
    return config;
};
