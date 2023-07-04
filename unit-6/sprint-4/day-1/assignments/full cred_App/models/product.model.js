const mongoose=require("mongoose");

const proSchema=mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    discription:{type:String,required:true}
});

const ProModle=mongoose.model("product",proSchema);

module.exports={ProModle}