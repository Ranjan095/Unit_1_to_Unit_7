import React from 'react'

const TodoList = ({id,status,title,handleDelete,handleToggle}) => {
  return (
    <div>
        <h2>{title} - {status?'Completed':'NotCompleted'}</h2>
        <button style={{background:'green',padding:'5px', color:'white',border:'none',width:'60px',borderRadius:'7px'}} onClick={()=>handleToggle(id)}>Toggle</button>{' '}
        <button style={{background:'green',padding:'5px', color:'white',border:'none',width:'60px',borderRadius:'7px'}} onClick={()=>handleDelete(id)}>Delete</button>
    </div>
  )
}

export default TodoList