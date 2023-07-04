import React, { useState } from 'react'

const TodoInput = ({addTodo}) => {
let [input,setInput]=useState('')

let handleClick=()=>{
    addTodo(input)
    setInput('')
}

  return (
    <div>
        <input onChange={(e)=>setInput(e.target.value)} value={input} placeholder='Add todo'/>
        <button onClick={handleClick}>Add_todo</button>
    </div>
  )
}

export default TodoInput