const mongoose=require("mongoose")

let userSchema = mongoose.Schema({
    name: String,
    rating: Number,
    langauge: String,
  });
  
  let UserModel = mongoose.model("user", userSchema);

  module.exports={UserModel}