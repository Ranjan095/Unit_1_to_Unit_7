/** @format */

const express = require("express");
const { UserModle } = require("../models/user.modle");
const userRoute = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

userRoute.post("/register", async (req, res) => {
  const { name, email, pass, city } = req.body;
  try {
    bcrypt.hash(pass, 5, async (err, hash) => {
      if (hash) {
        const user = new UserModle({ name, email, pass: hash, city });
        await user.save();
      }
    });

    res.status(200).send({ msg: "new user has been added" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

userRoute.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const user = await UserModle.findOne({ email });
    if (user) {
      bcrypt.compare(pass, user.pass, (err, result) => {
        if (result) {
          const token = jwt.sign({ org: "Masai" }, "ranjan");
          res.status(200).send({ msg: "login successful", token: token });
        } else {
          res.status(200).send({ msg: "wrong credential" });
        }
      });
    } else {
      res.status(200).send({ msg: "wrong credential" });
    }
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

module.exports = { userRoute };
