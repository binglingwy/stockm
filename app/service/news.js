const Service = require('egg').Service;

class NewsService extends Service {
    
    async list(currentPage = 1) {
        const pageSize = 4;
        console.log('===',this.ctx.model.User);
        // return await this.ctx.model.User.findAndCountAll({offset: 10, limit: 2});
        
        // // 限制字段
        // return await this.ctx.model.User.findAll({
        //     'attributes': ['id', 'name', 'age', 'mail']
        // });
    
        // return await this.ctx.model.User.findAll({
        //     'where': {
        //         'id': {
        //             '$in': [1,2,3,7],
        //             '$between': [2, 10]
        //         },
        //         'name': {
        //             '$like': '%五%',
        //             '$notLike': '%柳%'
        //         }
        //     }
        // });
    
        // return await this.ctx.model.User.findAll({
        //     'where': {
        //         '$or':[
        //             {'id': [1,2, 10]},
        //             {'name': '六六'}
        //         ],
        //     },
        //     'order': [
        //         ['age', 'DESC']
        //     ]
        // });
    
        return await this.ctx.model.User.findAll({
            'limit': pageSize,
            'offset': pageSize * (currentPage - 1)
        });
    
        // return await this.ctx.model.User.findAndCountAll({
        //     'limit': pageSize,
        //     'offset': pageSize * (currentPage - 1)
        // });
        
        
    }
}

module.exports = NewsService;