const Controller = require('egg').Controller;

class UserController extends Controller {
    
    async list() {
        const ctx = this.ctx;
        const page = ctx.query.page || 1;
        const newsList = await ctx.service.user.list(page);
        // console.log('newsList=', newsList);
        // await ctx.render('news/list.tpl', { list: newsList });
        ctx.body = {
            data:{ list: newsList },
            status:'200',
            message:'',
        };
    }
    
    
    async create() {
        const  ctx  = this.ctx;
        const params = ctx.request.body;
    
        console.log('prams.data=', params);
        let result = null;
        if(params.id){
            result = await ctx.service.user.update(params);
        }else{
            result = await ctx.service.user.create(params);
        }
        
        ctx.body = {
            data:result,
            status:'success',
            message:'添加成功了',
        };
    }
    
    async getUserById(){
        const ctx = this.ctx;
        const prams = ctx.request.body;
        
        console.log('byid==', prams);
        const result = await ctx.service.user.getUserByIdService(prams.id);
        ctx.body = {
            data:result,
            status:'success',
            message:'获取单用户成功',
        };
    }
    
    async deleteUser(){
        const ctx = this.ctx;
        const params = ctx.request.body;
        
        const result = await ctx.service.user.deleteUser(params.id);
        ctx.body = {
            data:result,
            status:'success',
            message:'',
        };
    }
    
}

module.exports = UserController;