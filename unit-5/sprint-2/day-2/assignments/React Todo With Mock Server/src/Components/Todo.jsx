import axios from "axios";
import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";

const Todos = () => {
  let [todos,setTodos]=useState([])
 

let url=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`
// let url=`http://localhost:8080/todos`


let getData=()=>{
  axios.get(url).then((res)=>{
    console.log(res)
    setTodos(res.data)
  })
}

useEffect(()=>{
  getData()
  
},[])

  let handleAddTodo=(newTodo)=>{
console.log(newTodo)
axios.post(url,newTodo).then((res)=>getData())

  }

  return (
    <div>
    {/* add TodoInput component here */}
    <TodoInput handleAddTodo={handleAddTodo}/>
    {/* map through the todos array and display the tasks */}
    <div data-testid = "todos-wrapper">
    {todos.map((ele)=>{
      return <div  key={ele.id}>
          <p>{ele.title} - {ele.status?'True':'False'}</p>
      </div>
    })}
    </div>
    </div>
  );
};

export default Todos;
