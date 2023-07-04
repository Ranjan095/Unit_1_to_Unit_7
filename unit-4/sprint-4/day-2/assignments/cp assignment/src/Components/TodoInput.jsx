
import React, { useState } from "react"
// import { addTodo } from "./Todo"

export default function TodoInput({addtodo}){
let [newItem,setNewItem]=useState({
    title:'',
    status:false
})
let {title,status}=newItem;

function handleChange(e){
let val=(e.target.value)
setNewItem({...newItem,title:val})

}

let handleAdd=()=>{
    // console.log(title,status)
    addtodo(title,status)
    setNewItem({title:''})
}
// console.log(newItem)

    return (
        <div>
           <h1>Todo List</h1>
           <input data-testid = "todo-input" onChange={handleChange} value={title} placeholder="add todo here"></input>{' '}
           <button onClick={handleAdd} data-testid ="add-button">Add Todo</button>
        </div>
    )
}