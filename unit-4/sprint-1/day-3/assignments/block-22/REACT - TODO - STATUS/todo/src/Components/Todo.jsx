import React, { useState } from 'react'
import TodoItem from './TodoItem'
import TodoList from './TodoList'

const Todo = () => {
    let [todo,setTodo]=useState([])

    let newItem=(obj)=>{
        setTodo([...todo,obj])
    }

    let handleToggle=(id)=>{
        let AfterToggleTodo=todo.map((ele)=>ele.id===id ? {...ele,status:!ele.status}: ele)
        setTodo(AfterToggleTodo)
    };

    let handleDelete=(id)=>{
       let AfterDeleteTodo=todo.filter((ele)=>ele.id !==id);
       setTodo(AfterDeleteTodo)
    }
    

  return (
    <div>
       <TodoItem newItem={newItem}/>

    {todo.map((ele)=>
     <TodoList key={ele.id}
     id={ele.id} 
     status={ele.status}
     title={ele.title}
     handleToggle={handleToggle}
     handleDelete={handleDelete}
     />)}
    </div>
  )
}

export default Todo