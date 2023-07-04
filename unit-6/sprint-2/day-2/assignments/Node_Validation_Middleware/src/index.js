//  import required modules from nodejs and build the server

const express=require("express");
let app=express();
app.use(express.json())
const validator=require("./middlewares/validator")

app.use(validator)

app.post("/",(req,res)=>{
   res.status(200).send("data received")
//    console.log("data received")
})



// app.listen(8080,()=>{
//     console.log('port is running in 8080')
// })

module.exports=app
// export the server



