/** @format */

// import required modules
const express = require("express");
const multer = require("multer");
const app = express();
const upload = multer({ dest: "uploads/" });
app.get("/", (req, res) => {
  console.log("home");
  res.send("HomePage");
});

app.post("/upload", upload.single("file"), (req, res) => {
  // req.file contains information about the uploaded file
  res.status(200).send({
    message: "file uploaded successfully",
  });
});

// app.listen(8080,()=>{
//     console.log("port is running in 8080")
// })

// export the server
// eg.module.exports = app;
module.exports = app;
