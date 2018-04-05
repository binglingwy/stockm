// {workdir}/app/model/group.js 一定要使用此目录
// 挂在到ctx下通过 ctx.model.User.fn()使用
module.exports = app => {
    const { STRING, DATE, BIGINT } = app.Sequelize;
    const Group = app.model.define("tb_groups", {
        id: {
            type: BIGINT(11),
            autoIncrement:true,
            primaryKey : true,
            unique : true
        },
        name: STRING(30),
        type: STRING(11),
        createdAt: {
            type:DATE,
            get() {
                return new Date(this.getDataValue('createdAt')).getTime();
            },
            set(){
                return this.getDataValue('createdAt');
            }
        },
        updatedAt:{
            type:DATE,
            get() {
                return new Date(this.getDataValue('updatedAt')).getTime();
            },
            set(){
                return this.getDataValue('updatedAt');
            }
        }
    });
    return Group;
};
