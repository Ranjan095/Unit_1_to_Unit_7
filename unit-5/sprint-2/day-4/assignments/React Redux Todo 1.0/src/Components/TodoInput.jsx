/** @format */

import axios from "axios";
import React from "react";
import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { getTodoError, getTodoRequest, getTodoSuccess, postTodoError, postTodoRequest, postTodoSuccess } from "../Redux/action";
import { ADD_TODOS_SUCCESS } from "../Redux/actionTypes";

//make a POST request (by dispatching the function), to save the data in db.json
//make a GET request (by dispatching the function), if the post request is successful, by chaining them together
const TodoInput = () => {
let [text,setText]=useState('')


  let dispatch = useDispatch();

  let url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`;

  let getData = () => {
    dispatch(getTodoRequest());
    axios
      .get(url)
      .then((res) => {
        dispatch(getTodoSuccess(res.data));
        console.log(res.data);
      })
      .catch((res) => {
        dispatch(getTodoError());
      });
  };

  useEffect(() => {
    getData();
  }, []);

  let handleClick=()=>{
    let obj={
      title:text,
      status:false
    }
    dispatch(postTodoRequest())
    axios.post(url,obj).then((res)=>{
      dispatch(postTodoSuccess(res.data))
      console.log(res.data)
    }).catch((err)=>{
      dispatch(postTodoError())
    })
    setText('')
  }

  return (
    <div>
      <input value={text} onChange={(e)=>setText(e.target.value)} data-testid="todo-input" />
      <button onClick={handleClick} data-testid="todo-add-btn">Add Todo</button>
    </div>
  );
};

export default TodoInput;
