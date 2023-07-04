/** @format */

const express = require("express");
const { connection } = require("./db");
const { userRoute } = require("./routes/user.route");

let app = express();
app.use(express.json());

app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("home page");
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("connected to DB");
  } catch (err) {
    console.log(err);
  }
  console.log("port is running at 8080");
});
