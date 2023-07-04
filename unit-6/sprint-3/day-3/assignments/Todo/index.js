const express=require("express");
const {connection}=require("./db");
const { todoRouter } = require("./router/todo.route");
const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("home page")
});

app.use("/todos",todoRouter)


app.listen(8080,async()=>{
    await connection;
    console.log("connected to DB");
    console.log("port is runnint at 8080")
})