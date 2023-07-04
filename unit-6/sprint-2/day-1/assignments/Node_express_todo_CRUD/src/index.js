/** @format */

//  import required modules from nodejs and build the server
const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

/**GET */
app.get("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  res.send(data.todos);
  console.log(data);
});

/**POST */
app.post("/", (req, res) => {
  const pars_data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  const newData = req.body;

  pars_data.todos.push(newData);
  // console.log(pars_data)

  fs.writeFileSync("./db.json", JSON.stringify(pars_data));
  // console.log(newData)

  res.send(JSON.stringify(pars_data.todos));
});

/** Put  */
app.put("/:id", (req, res) => {
  const { id } = req.params;
  // console.log(id)
  const pars_data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let myData = pars_data.todos;
  console.log(req.body.status);

  let check = false;
  myData.forEach((ele) => {
    if (ele.id == +id) {
      check = true;
    }
  });
  if (check == false) {
    res.status(400).send("Invalid argument");
  } else {
    const newData = myData.map((ele) => {
      if (ele.id == +id) {
        return { ...ele, status: req.body.status };
      } else {
        return ele;
      }
    });

    let newJson = { todos: [] };
    newJson.todos = newData;

    fs.writeFileSync("./db.json", JSON.stringify(newJson));
    // console.log(newData)
    console.log(newJson);
    res.send(JSON.stringify(newJson.todos));
  }

});

/**Delete */

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  // console.log(id)
  const pars_data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let myData = pars_data.todos;
  console.log(req.body.status);

  let check=false;
  myData.forEach((ele)=>{
    if(ele.id==+id){
        check=true;
    }
  })
  if(check==false){
res.status(400).send("Invalid argument")
  }else{
  const newData = myData.filter((ele) => {
    if (ele.id !== +id) {
      return ele;
    }
  });

  let newJson = { todos: [] };
  newJson.todos = newData;

  fs.writeFileSync("./db.json", JSON.stringify(newJson));
  // console.log(newData)
  console.log(newJson);
  res.send(JSON.stringify(newJson.todos));

  }



})
// app.listen(8080,()=>{
//     console.log('port is running in 8080')
// })
// export the server
// eg.module.exports = app;

module.exports = app;
