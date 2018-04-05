const Service = require('egg').Service;
const uuidv1 = require('uuid/v1');

class UserService extends Service {
    
    async create(userModel) {
        let user = null;
        if(userModel.id){
            user = await this.ctx.model.User.findById(userModel.id);
        }else{
        
        }
        // const token = uuidv1();
        const result = await this.ctx.model.User.create(userModel);
        // await this.ctx.app['redis'].set(token, JSON.stringify(result.dataValues), 'EX', 30 * 60 * 24);
        // return await this.ctx.model.User.findAndCountAll({offset: 10, limit: 2});
        return result;
    }
    
    async update(userModel){
        if(!userModel.id){
            this.ctx.throw('id is must');
        }
        
        console.log('userModel=', userModel);
        const user = await this.ctx.model.User.findById(userModel.id);
        
        if(!user){
            this.ctx.throw('user not found');
        }
        
        return await user.update(userModel);
        
    }
    
    async deleteUser(id){
        if(!id){
            this.ctx.throw('user id is must');
        }
        
        return await this.ctx.model.User.destroy({'where':{'id':id}});
    }
    
    async getUserByIdService(id){
        // return await this.ctx.model.User.findById(id);
        return await this.ctx.model.User.findOne({'where': {'id': id}});
    }
    
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

module.exports = UserService;