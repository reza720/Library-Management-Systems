const sequelize=require("../config/database");

const Member=require("./Member");
const Book=require("./Book");
const IssuedBook=require("./IssuedBook");

Member.hasMany(IssuedBook, {foreignKey:"memberId"});
IssuedBook.belongsTo(Member,{foreignKey:"memberId"});
Book.hasMany(IssuedBook, {foreignKey:"bookId"});
IssuedBook.belongsTo(Book,{foreignKey:"bookId"});

module.exports={
    sequelize,
    Member,
    Book,
    IssuedBook
};
