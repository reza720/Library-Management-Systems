const {DataTypes}=require("sequelize");
const sequelize=require("../config/database");

const Book=sequelize.define("Book", {
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name:{type:DataTypes.STRING, allowNull:false, unique:true, validate:{
       notEmpty:true, 
    }},
    author:{type:DataTypes.STRING, allowNull:false,validate:{
        notEmpty:true,
        is:/^[A-Za-z]+( [A-Za-z]+)*$/,
    }},
    rent:{type:DataTypes.DECIMAL(10,2), allowNull:false,validate:{
        min:[0],
    }},
},{
    timestamps:true
});
module.exports=Book;