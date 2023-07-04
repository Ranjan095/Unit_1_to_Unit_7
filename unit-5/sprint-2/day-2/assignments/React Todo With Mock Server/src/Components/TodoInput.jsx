import React, { useState } from 'react'

const TodoInput = ({handleAddTodo}) => {
  let [input,setInput]=useState('')

  let newTodo={
    title:input,
    status:false
  }
    
    let handleClick=()=>{
        handleAddTodo(newTodo);
        setInput('')
    }
  return (
    <div>
        <input data-testid = "todo-input" onChange={(e)=>setInput(e.target.value)} value={input } placeholder='Add todos'/>
        <button onClick={handleClick} data-testid="add-button">Add Todo</button>
    </div>
  )
}

export default TodoInput