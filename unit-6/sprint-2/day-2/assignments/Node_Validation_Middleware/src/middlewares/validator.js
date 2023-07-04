/** @format */

const fs = require("fs");

// make the validator function and export it.

let checkNum = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "0" ||
      str[i] == "1" ||
      str[i] == "2" ||
      str[i] == "3" ||
      str[i] == "4" ||
      str[i] == "5" ||
      str[i] == "6" ||
      str[i] == "7" ||
      str[i] == "8" ||
      str[i] == "9"
    ) {
      count++;
    }
  }
  if (count > 0) {
    return true;
  } else {
    return false;
  }
};

let checkArrString = (arr) => {
  let checkStr = true;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] != "string") {
      checkStr = false;
    }
  }
  if (checkStr) {
    return true;
  } else {
    return false;
  }
};

let validator = (req, res, next) => {
  const { ID, Name, Rating, Description, Genre, Cast } = req.body;
  if (!ID || !Name || !Rating || !Description || !Genre || !Cast) {
    res.status(400).send("invalid request body.");
  } else {
    if (typeof Rating == "number") {
      fs.appendFileSync("./res.txt", "Rating is a number\n");
    }
    if (typeof Rating != "number") {
      res.status(400).send("bad request.some data is incorrect.");
      fs.appendFileSync("./res.txt", "bad request.some data is incorrect.\n");
    }
    if (typeof ID == "number") {
      fs.appendFileSync("./res.txt", "ID is a number\n");
    }
    if (typeof ID != "number") {
      res.status(400).send("bad request.some data is incorrect.");
      fs.appendFileSync("./res.txt", "bad request.some data is incorrect.\n");
    }
    if (typeof Name == "string") {
      if (!checkNum(Name)) {
        fs.appendFileSync("./res.txt", "Name is a string\n");
      } else {
        res.status(400).send("bad request.some data is incorrect.");
        fs.appendFileSync("./res.txt", "bad request.some data is incorrect.\n");
      }
    }
    if (typeof Name != "string") {
      res.status(400).send("bad request.some data is incorrect.");
      fs.appendFileSync("./res.txt", "bad request.some data is incorrect.\n");
    }
    if (typeof Description == "string") {
      fs.appendFileSync("./res.txt", "Description is a string\n");
    }
    if (typeof Description != "string") {
      res.status(400).send("bad request.some data is incorrect.");
      fs.appendFileSync("./res.txt", "bad request.some data is incorrect.\n");
    }
    if (typeof Genre == "string") {
      fs.appendFileSync("./res.txt", "Genre is a string\n");
    }
    if (typeof Genre != "string") {
      res.status(400).send("bad request.some data is incorrect.");
      fs.appendFileSync("./res.txt", "bad request.some data is incorrect.\n");
    }
    if (typeof Cast == "object") {
      if (checkArrString(Cast)) {
        fs.appendFileSync("./res.txt", "Cast is a array of string\n");
      } else {
        res.status(400).send("bad request.some data is incorrect.");
        fs.appendFileSync("./res.txt", "bad request.some data is incorrect.\n");
      }
    }
  }
  next();
};

module.exports = validator;
