/** @format */

import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  todoPendingAction,
  todoPostPendingAction,
  todoPostRequestAction,
  todoPostSuccessAction,
  todoRequestAction,
  todoSuccessAction,
} from "../redux/action";
import TodoInput from "./TodoInput";

const Todo = () => {
  let url = `http://localhost:8080/todos`;

  let { todos, isLoading, isErr } = useSelector((store) => {
    return store;
  });
  console.log(todos);

  let dispatch = useDispatch();

  let getData = () => {
    dispatch(todoRequestAction());
    axios
      .get(url)
      .then((res) => {
        // console.log(res)
        dispatch(todoSuccessAction(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(todoPendingAction());
      });
  };

  let handleTodo = (input) => {
    let newTodo = {
      title: input,
      status: false,
    };
    dispatch(todoPostRequestAction());
    axios.post(url, newTodo)
    .then((res) => {
      // console.log(res.data);
      dispatch(todoPostSuccessAction(res.data))
    }).catch((err)=>{
      // console.log(err)
      dispatch(todoPostPendingAction())
    })
  };

  useEffect(() => {
    getData();
  }, []);

  return isLoading ? (
    <h1>Loading....</h1>
  ) : isErr ? (
    <h1>Somthing went wrong ...</h1>
  ) : (
    <div>
      <h1>Todo using React-redux.</h1>
      <TodoInput addTodo={handleTodo} />

      {todos.length > 0 ? (
        todos.map((res) => {
          return (
            <div key={res.id}>
              <p>
                {res.title} - {res.status ? "completed" : "pending"}
              </p>
            </div>
          );
        })
      ) : (
        <h1>NO_DATA_FOUND</h1>
      )}
    </div>
  );
};

export default Todo;
