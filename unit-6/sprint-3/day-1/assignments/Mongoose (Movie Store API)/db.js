/** @format */

const mongoose = require("mongoose");

let connection = mongoose.connect("mongodb://127.0.0.1:27017/MoviStore");
console.log("connected to DB");

module.exports = { connection };
