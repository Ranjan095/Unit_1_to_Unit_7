/** @format */

import React, { useState } from "react";

const TodoInput = ({handleClick}) => {

  let [data, setData] = useState({
    title: "",
    status: false,
  });
let handleChange=(e)=>{
    setData({...data,title:e.target.value})
};
// console.log(data)

  return (
    <div>
      <input placeholder="Add todo here" onChange={handleChange} data-testid="todo-input" type="text" />
      <button onClick={()=>handleClick(data)} data-testid="add-button">Add Todo</button>
    </div>
  );
};

export default TodoInput;
