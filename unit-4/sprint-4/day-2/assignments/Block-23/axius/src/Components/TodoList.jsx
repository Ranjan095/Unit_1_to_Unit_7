import React from 'react'

const TodoList = ({id,title,status}) => {
    
  return (
    <div>
        <h3>{title}-{status?'True':'False'}</h3>
    </div>
  )
}

export default TodoList