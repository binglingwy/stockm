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
    
    // config.sequelize = {
    //     dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    //     database: 'test',
    //     host: 'localhost',
    //     port: '3306',
    //     username: 'root',
    //     password: 'root',
    // };
    
    // sequelize config
    config.sequelize = {
        dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
        database: 'stockm',
        host: '111.231.76.145',
        port: '3306',
        username: 'root',
        password: 'li_lu1023',
        define: {
            // 字段以下划线（_）来分割（默认是驼峰命名风格）
            underscored: false,
            charset: 'utf8',
            timestamps: true,
            freezeTableName: true       //表名去s
        },
        timezone: '+08:00', // 东八时区
    };
    
    
    
    
    return config;
};
