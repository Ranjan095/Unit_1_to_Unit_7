/** @format */
import axios from "axios";
import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "../App.css"
// import { getData,addTodo } from "./api";


export let getData=()=>{
  return axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`)
 };

let addTodo=(input)=>{
  return axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`,input)
 }
 

const Todos = () => {
  let [todo, setTodo] = useState([]);

 let afterFetchData=()=>{
  getData().then((res)=>{
    setTodo(res?.data)
  })
 };

  useEffect(()=>{
    afterFetchData()
    
  },[])
  console.log(todo)
  

  let handleInput = (input) => {
    addTodo(input).then(()=>{
      afterFetchData()
    })
  
  };

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <TodoInput handleClick={handleInput} />
      {/* add TodoInput component here */}
      {/* map through the todos array and display the tasks */}
     <div className='App' data-testid = "todos-wrapper">
     {todo.map((ele)=><TodoList key={ele.id} {...ele}/>)}
     </div>
    </div>
  );
};

export default Todos;
