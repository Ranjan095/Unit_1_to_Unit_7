/** @format */

// Do not forget to export the server.
// e.g => module.exports = server;

const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

const validator = (req, res, next) => {
  const dlt = req.method;
  const { pass, role } = req.query;
  if (dlt == "DELETE" || dlt == "PATCH") {
    if (pass == 4534 && role == "leader") {
      next();
    } else {
      res.status(401).send(`You are not authorised to do this operation`);
    }
  }
};

app.get("/", (req, res) => {
  res.setHeader("Content-type", "text/html");
  res
    .status(200)
    .send(
      `<h1>Welcome new Team Member, You are about to be the part of best Superhero Team Out there!!!</h1>`
    );
});

app.post("/marvel/addnew", (req, res) => {
  try {
    let newData = req.body;
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    //   data.marvel.push(newData)
    data.marvel.push(newData);
    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.status(200).send(`New superhero has been added`);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post("/dc/addnew", (req, res) => {
  try {
    let newData = req.body;
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    data.dc.push(newData);
    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.status(200).send(`New superhero has been added`);
  } catch (err) {
    res.status(400).send(err);
  }
});
app.get("/marvel", (req, res) => {
  let { alias } = req.query;

  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));

  if (alias) {
    for (let i = 0; i < data.marvel.length; i++) {
      if (data.marvel[i].alias == alias) {
        res.status(200).send(JSON.stringify(data.marvel[i]));
      }
    }
  } else {
    res.status(200).send(JSON.stringify(data.marvel));
  }
});

app.get("/dc", (req, res) => {
  let { alias } = req.query;
  if (alias) {
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));

    for (let i = 0; i < data.dc.length; i++) {
      if (data.dc[i].alias == alias) {
        res.status(200).send(JSON.stringify(data.dc[i]));
      }
    }
  } else {
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    res.status(200).send(JSON.stringify(data.dc));
  }
});

app.get("/marvel/:id", (req, res) => {
  let { id } = req.params;
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let mar = data.marvel;
  for (let i = 0; i < mar.length; i++) {
    if (mar[i].id == id) {
      res.status(200).send(mar[i]);
    }
  }
  // console.log(mar.length)
});

app.get("/dc/:id", (req, res) => {
  let { id } = req.params;
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let mar = data.dc;
  for (let i = 0; i < mar.length; i++) {
    if (mar[i].id == id) {
      res.status(200).send(mar[i]);
    }
  }
  // console.log(mar.length)
});

app.get("/winningteam", (req, res) => {
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let d = data.dc;
  let mar = data.marvel;

  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < d.length; i++) {
    count1 += d[i].power_level;
  }
  for (let i = 0; i < mar.length; i++) {
    count2 += mar[i].power_level;
  }
  if (count1 > count2) {
    res.status(200).send(data.dc);
  } else {
    res.status(200).send(data.marvel);
  }
});

app.patch("/marvel/update/:id", (req, res) => {
  let { id } = req.params;
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));

  for (let i = 0; i < data.marvel.length; i++) {
    if (data.marvel[i].id == id) {
      data.marvel[i] = req.body;
    }
  }
  fs.writeFileSync("./db.json", JSON.stringify(data));
  res.status(200).send("Patched Character Details");
});

app.patch("/dc/update/:id", validator, (req, res) => {
  let { id } = req.params;
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  
  for (let i = 0; i < data.dc.length; i++) {
    if (data.dc[i].id == id) {
      data.dc[i] = req.body;
    }
  }

  fs.writeFileSync("./db.json", JSON.stringify(data));
  res.status(200).send("Patched Character Details");
});

app.delete("/marvel/delete/:id", validator, (req, res) => {
  let { id } = req.params;
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let updatedData = data.marvel.filter((el) => {
    if (el.id != id) {
      return el;
    }
  });
  data.marvel = updatedData;
  fs.writeFileSync("./db.json", JSON.stringify(data));
  res.status(200).send("Deleted Character Details");
});

app.delete("/dc/delete/:id", validator, (req, res) => {
  let { id } = req.params;
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let updatedData = data.dc.filter((el) => {
    if (el.id != id) {
      return el;
    }
  });
  data.dc = updatedData;
  fs.writeFileSync("./db.json", JSON.stringify(data));
  res.status(200).send("Deleted Character Details");
});

// app.listen(8080, () => {
//   console.log("server is running at 8080");
// });

module.exports = app;
