/** @format */

const { TodoModel } = require("../model/todo.model");
const express = require("express");
let todoRouter = express.Router();

todoRouter.post("/create", async (req, res) => {
  try {
    const todo =await new TodoModel(req.body);
    todo.save();
    res.send(todo);
  } catch (err) {
    console.log(err);
  }
});
todoRouter.get("/",async(req,res)=>{
    try {
        const todos=await TodoModel.find();
        // todos.save()
        res.send(todos)
    } catch (err) {
        console.log(err)
    }
});
todoRouter.patch("/update/:id",async(req,res)=>{
    const {id}=req.params;
  try {
     await TodoModel.findByIdAndUpdate({_id:id},req.body);
    res.send("todo is updated")
  } catch (err) {
    console.log(err)
  }
});

todoRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params;
    try {
        await TodoModel.findByIdAndDelete({_id:id});
        res.send("todo has been deleted")
    } catch (err) {
        console.log(err)
    }
})

module.exports = { todoRouter };
