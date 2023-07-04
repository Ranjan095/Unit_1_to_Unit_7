/** @format */

import React, { useEffect, useState } from "react";
import useMyReducer from "../Hooks/useMyReducer";

let reducer = (state, { type, payload }) => {
  switch (type) {
    case "input": {
      return { ...state, todo: [...state.todo, payload] };
    }
    default: {
      return state;
    }
  }
};
let init = {
  todo: [],
  counter: 0,
};

const Todo = () => {
  let [data, setData] = useState("");
  let [state, dispatch] = useMyReducer(reducer, init);

  useEffect(() => {
    console.log(state.todo);
  }, [state]);

  let handleChange = (e) => {
    setData(e.target.value);
  };
  let handleClick = () => {
    // console.log(data)
    dispatch({ type: "input", payload: data });
    setData("");
  };
  let handleDelete = (item) => {
    let arr = state.todo.filter((ele, id) => ele !== item);
    state.todo = arr;
  };

  return (
    <div>
      <h1>todo</h1>
      <input value={data} onChange={handleChange} placeholder="Task"></input>
      <br></br>
      <br></br>
      <button onClick={handleClick}>Add todo</button>

      {state.todo.map((ele) => {
        return (
          <div>
            <h1>
              {ele} <button onClick={() => handleDelete(ele)}>delete</button>
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
