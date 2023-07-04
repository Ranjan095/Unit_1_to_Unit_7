/** @format */

const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  player_name:String,
  position:String,
  team:String,
  goals:Number,
  assists:Number,
  nationality:String,
  age:Number,
  mutable:Boolean,
});

const UserModel=mongoose.model("user",UserSchema)

module.exports={UserModel}
