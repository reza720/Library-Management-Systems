const express=require("express");
const app=express();
const globalErrorHanlder=require("../src/middlewares/globalErrorHandler");

app.use(express.json());

const routes = require("./routes");
app.use("/api",routes);
app.use((req, res) => {
    res.status(404).json({message:"Route not found"});
});
app.use(globalErrorHanlder);
module.exports = app;
