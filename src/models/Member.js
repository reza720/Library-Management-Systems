const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Member=sequelize.define("Member", {
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    fullName:{type:DataTypes.STRING, allowNull:false},
    email:{type:DataTypes.STRING, allowNull:false, unique:true},
    phone:{type:DataTypes.STRING, allowNull:false},
},{
    timestamps:true,
    indexes:[
        {fields:["fullName"]}
    ]
});
module.exports=Member;