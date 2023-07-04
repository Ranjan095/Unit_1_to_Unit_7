/** @format */

let express = require("express");
let { connection} = require("./db.js");
const { movieRouter } = require("./router/movie.router.js");
let app = express();
app.use(express.json());

app.use("/movies",movieRouter)

app.listen(8080, async () => {
  try {
    await connection;
  } catch (err) {
    console.log(err);
  }
  console.log("port is running 8080");
});
