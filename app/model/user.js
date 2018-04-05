// {workdir}/app/model/user.js 一定要使用此目录
// 挂在到ctx下通过 ctx.model.User.fn()使用
module.exports = app => {
    const { STRING, INTEGER, DATE, BIGINT } = app.Sequelize;
    const User = app.model.define("tb_users", {
        id: {
            type: BIGINT(11),
            autoIncrement:true,
            primaryKey : true,
            unique : true
        },
        name: STRING(30),
        age: INTEGER(11),
        mail: STRING(30),
        passwd: STRING(32),
        created_at: {
            type:DATE,
            get() {
                return new Date(this.getDataValue('created_at')).getTime();
            },
            set(){
                return this.getDataValue('created_at');
            }
        },
        updated_at:{
            type:DATE,
            get() {
                return new Date(this.getDataValue('updated_at')).getTime();
            },
            set(){
                return this.getDataValue('updated_at');
            }
        }
    });
    return User;
};
