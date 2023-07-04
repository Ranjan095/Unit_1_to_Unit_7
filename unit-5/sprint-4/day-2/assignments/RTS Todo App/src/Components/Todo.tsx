import React from "react";

interface TodoInterface {
  title: string;
  description: string;
  status?: boolean;
  id:number;
  Update:(el:number)=>void
}
function Todo({title,description,status,id,Update}:TodoInterface) {

  const handleClick=()=>{
    Update(id)
  }
  
  return (
    <div data-testid="todo-container">
      <h2 data-testid="todo-title">{title}</h2>
      <p data-testid="todo-desc">{description} - {status?'True':'False'}</p>
      {/* Based on the status value below checkbox will be checked/unchecked  */}
      <input data-testid="todo-status" type="checkbox" onClick={handleClick}/>
    </div>
  );
}

export default Todo;
