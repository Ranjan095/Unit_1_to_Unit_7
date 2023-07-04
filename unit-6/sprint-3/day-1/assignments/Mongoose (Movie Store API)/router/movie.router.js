/** @format */

const express = require("express");
const { UserModel } = require("../model/movi.model");
const movieRouter = express.Router();

movieRouter.post("/add", async (req, res) => {
  try {
    let movie = await new UserModel(req.body);
    movie.save();
    res.send(movie);
  } catch (err) {
    console.log(err);
  }
});
// filter my rating min - max
movieRouter.get("/", async (req, res) => {
  let { min,max } = req.query;

  try {
    if (min && max) {
      let movies = await UserModel.find({$and:[{ rating: { $gt: min } },{rating:{$lt:max}}]});
      res.send(movies);
    } else {
      let movies = await UserModel.find();
      res.send(movies);
    }
  } catch (err) {
    console.log(err);
  }
});
// filter by rating min
movieRouter.get("/filterByMin",async(req,res)=>{
  let {min}=req.query;
  try {
    if(min){
      let movie=await UserModel.find({rating:{$gte:min}})
      res.send(movie)
    }else{
      let movie=await UserModel.find();
      res.send(movie)
    }
  } catch (err) {
    console.log(err)
  }
});
//filter by rating max
movieRouter.get("/filterByMax",async(req,res)=>{
  let {max}=req.query;
  try {
    if(max){
      let movie=await UserModel.find({rating:{$lte:max}})
      res.send(movie)
    }else{
      let movie=await UserModel.find();
      res.send(movie)
    }
  } catch (err) {
    console.log(err)
  }
});
// Text search
movieRouter.get("/filterByName",async(req,res)=>{
  let {q}=req.query;
  try {
    if(q){
      let movie=await UserModel.find({ name: { $regex: q } })
      res.send(movie)
    }else{
      let movie=await UserModel.find();
      res.send(movie)
    }
  } catch (err) {
    console.log(err)
  }
});
movieRouter.patch("/update/:id", async (req, res) => {
  let { id } = req.params;
  try {
    await UserModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send("Movie data updated");
  } catch (err) {
    console.log(err);
  }
});
movieRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.findByIdAndDelete({ _id: id });
    res.send("movie is deleted");
  } catch (err) {
    console.log(err);
  }
});

module.exports = { movieRouter };
