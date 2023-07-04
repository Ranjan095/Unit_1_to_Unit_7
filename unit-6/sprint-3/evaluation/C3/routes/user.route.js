/** @format */

const express = require("express");
const { UserModel } = require("../models/user.model");
const fs = require("fs");
userRoute = express.Router();
const { validator } = require("../middlewares/validator");

// add user using /user/add////
userRoute.post("/add", validator, async (req, res) => {
  try {
    const user = await new UserModel(req.body);
    user.save();
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

// get all users using /user///
userRoute.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.send(users);
  } catch (err) {
    res.send(err);
  }
});

// Filters///
// * There should be a filter to get the players above a certain number of goals.///
userRoute.get("/goals", async (req, res) => {
  let { goal } = req.query;
  try {
    const user = await UserModel.find({ goals: { $gt: goal } });
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

//* There should be a filter to get the players below a certain age.///
userRoute.get("/age", async (req, res) => {
  let { age } = req.query;
  try {
    const user = await UserModel.find({ age: { $lt: age } });
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

// * There should be a filter to get the players of a particular nationality.///
userRoute.get("/nationality", async (req, res) => {
  let { nationality } = req.query;
  try {
    const user = await UserModel.find({ nationality: nationality });
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

// - A GET route to get top 5 players having maximum number of goals//
userRoute.get("/top5", async (req, res) => {
  try {
    const user = await UserModel.find().sort({ goals: -1 }).limit(5);
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

// - A GET route to get the details of the player with a particular id. ////
userRoute.get("/search/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const user = await UserModel.find({ _id: id });
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

// - A PATCH route to update the data of any particular player.///
userRoute.patch("/update/:id", async (req, res) => {
  let { id } = req.params;
  try {
    await UserModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send("user is updated");
    fs.appendFileSync(
      "./records.txt",
      `The player with id:${id} has been updated | ${Date()}.\n`
    );
  } catch (err) {
    res.send(err);
  }
});

// - A DELETE route to delete the data of any particular player.///
userRoute.delete("/delete/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const user = await UserModel.findByIdAndDelete({ _id: id });
    res.send("user is Deleted");
    fs.appendFileSync(
      "./records.txt",
      `The player with id:${id} has been deleted | ${Date()}.\n`
    );
  } catch (err) {
    res.send(err);
  }
});

// * Should be able to pass a page number as a param and get the player details, 3 players are allowed per page.///
userRoute.get("/pagination", async (req, res) => {
  let page = req.query.page || 1;
  let limit = 3;
  let skip = (page - 1) * limit;
  try {
    const user = await UserModel.find().skip(skip).limit(limit);
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

module.exports = { userRoute };
