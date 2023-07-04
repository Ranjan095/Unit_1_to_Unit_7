const express=require("express");
const { connecting } = require("./db");
const {proRoute}=require("./routes/productRoute")
const {userRoute}=require("./routes/user.route")
const app=express();
const {auth}=require("./auth")
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("home")
});


app.use(auth)
app.use("/users",userRoute)
app.use("/products",proRoute)

app.listen(8080,async()=>{
    try {
        await connecting
        console.log("connected to db")
    } catch (err) {
        res.status(400).send({"msg":err.message})
    }
    console.log("port is running at 8080")
})