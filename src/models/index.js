const sequelize=require("../config/database");
const Member=require("./member");
const Book=require("./book");
const IssuedBook=require("./issuedBook");

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
