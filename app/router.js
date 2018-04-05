'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    console.log('==app==',app);
    
    router.get('/', controller.home.index);
    router.get('/news', controller.news.list);
    
    app.post('/user/list', controller.user.list);
    app.post('/user/create', controller.user.create);
    app.post('/user/delete', controller.user.deleteUser);
    app.post('/user/getUserById', controller.user.getUserById);
    
    
};
