const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Member=sequelize.define("Member", {
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    fullName:{type:DataTypes.STRING, allowNull:false, validate:{
        notEmpty:true,
        is:/^[A-Za-z]+( [A-Za-z]+)*$/,
    }},
    email:{type:DataTypes.STRING, allowNull:false, unique:true, validate:{
        isEmail:true,
    }},
    phone:{type:DataTypes.STRING, allowNull:false, validate:{
        is:/^\d+$/,
        len:[10,10],
    }},
},{
    timestamps:true
});
module.exports=Member;