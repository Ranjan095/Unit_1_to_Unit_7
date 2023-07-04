import React, { useState } from 'react'

const TodoItem = ({newItem}) => {
let [text,setText]=useState('')

    let handleChange=(e)=>{
        setText(e.target.value)
    };
    let obj=
    {
     title:text,
     id:Math.random(),
     status:false
    };
    
let handleClick=()=>{
   newItem(obj)
  setText('')
}
  return (
    <div>
        <h1 style={{background:'green',padding:'15px',color:'white'}}>Todo App</h1>
        <div style={{border:'1px solid black',padding:'15px'}}>
        <input style={{padding:'10px',width:'300px'}} value={text} onChange={handleChange} placeholder='Enter Title'></input><br></br><br></br>
        <button style={{background:'green',padding:'10px', color:'white',border:'none',width:'100px',borderRadius:'10px'}}onClick={handleClick}>ADD</button>
        </div>
        
    </div>
  )
}

export default TodoItem