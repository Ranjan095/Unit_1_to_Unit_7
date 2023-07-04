/** @format */

// import required modules
let express = require("express");
let morgan=require("morgan")
let fs=require("fs")
let app = express();

morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
})

app.get("/", (req, res) => {
  console.log({ message: "welcome to server" });
  fs.appendFileSync("./src/access.log","abc")
  console.log($Date())
  res.status(200).send({ message: "welcome to server" });
});
app.get("/get-users", (req, res) => {
  fs.appendFileSync("./src/access.log",`${req.method}\n`)
  res.status(200).send({ message: "here is the list of all users" });
});
app.post("/add-user",(req,res)=>{
  fs.appendFileSync("./src/access.log",`${req.method}\n`)
  res.status(201).send({"message": "user added successfully"})
});
app.put("/user/:id",(req,res)=>{
  let {id}=req.params;
  fs.appendFileSync("./src/access.log",`${req.method}\n`)
  res.status(201).send({"message": `user ${id} updated successfylly`})
});
app.delete("/user/:id",(req,res)=>{
  let {id}=req.params;
fs.appendFileSync("./src/access.log",`${req.method}\n`)
  res.status(200).send({"message": `user ${id} deleted successfylly`})
})

app.listen(8080, () => {
  console.log("port is running at 8080");
});

module.exports = app;
// export the server
// eg.module.exports = app;
