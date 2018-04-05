'use strict';
const path = require('path');
module.exports = appInfo => {
    const config = {};
    
    config.security = {
        domainWhiteList: [ 'http://localhost:3000' ],
        csrf: {
            ignore: '/', // 不做csrf校验,
            domainWhiteList: ['http://localhost:7100'],
        },
    };
    
    
    
    return config;
};