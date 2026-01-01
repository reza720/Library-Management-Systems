const {DataTypes}=require("sequelize");
const sequelize=require("../config/database");

const IssuedBook=sequelize.define("IssuedBook",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    memberId:{type:DataTypes.INTEGER,allowNull:false},
    bookId:{type:DataTypes.INTEGER, allowNull:false},
    issuedDate:{type:DataTypes.DATEONLY, allowNull:false},
    returnDate:{type:DataTypes.DATEONLY, allowNull:true},
    isReturned:{type:DataTypes.BOOLEAN, allowNull:false,defaultValue:false},
},{
    timestamps:true
});
module.exports=IssuedBook;