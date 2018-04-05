module.exports = app => {
    const { STRING, INTEGER, DATE, BIGINT } = app.Sequelize;
    const News = app.model.define("tb_news", {
        id: {
            type: BIGINT(11),
            autoIncrement:true,
            primaryKey : true,
            unique : true
        },
        title: STRING(50),
        content: INTEGER(150),
        userId: BIGINT(11),
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
    return News;
};