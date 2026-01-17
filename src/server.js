const app=require("./app");
const database=require("./config/database"); 

const port=3000;
(async () => {
    try {
        await database.authenticate();
        await database.sync();
        console.log("Database connected");

        app.listen(port,()=>{
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.error(error);
    }
})();
