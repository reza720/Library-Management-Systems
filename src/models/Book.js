const {DataTypes}=require("sequelize");
const sequelize=require("../config/database");

const Book=sequelize.define("Book", {
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name:{type:DataTypes.STRING, allowNull:false, unique:true},
    author:{type:DataTypes.STRING, allowNull:false},
    rent:{type:DataTypes.DECIMAL(10,2), allowNull:false},
},{
    timestamps:true,
});
module.exports=Book;