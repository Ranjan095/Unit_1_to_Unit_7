import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import axios from 'axios'

function getData(){
return axios.get('http://localhost:8080/todos')
}

export let addTodo=(title,status)=>{
// console.log(status,title)
axios.post('http://localhost:8080/todos',{
    title:title,
    status:status
    
  })
  
}

const Todos = () => {
  let [todo,setTodo]=useState([])

  useEffect(()=>{
    getData().then((ele)=>{
      setTodo(ele.data)
      console.log(ele.data)
    })
  },[])

  return (
    <div >
      <TodoInput addtodo={addTodo}/>
      {todo.map((ele)=>(
       <div key={ele.id} data-testid = "todos-wrapper">
         <h3 >{ele.title} - {ele.status? 'true':'false'}</h3>
         
       </div>
        
      ))}
    
    </div>
  );
};

export default Todos;
