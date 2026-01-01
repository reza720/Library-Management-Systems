const {Sequelize}=require("sequelize");
const sequelize = new Sequelize(
  'Library_Management_Systems',     
  'root',         
  'root',     
  {
    host: 'localhost',
    dialect: 'mysql',
    logging: false, 
  }
);
module.exports = sequelize;
