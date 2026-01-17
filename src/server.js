const app = require("./app");
const sequelize = require("./config/database"); 

const PORT = process.env.PORT || 3000;
(async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (err) {
        console.error("Unable to connect to the database:", err);
    }
})();
