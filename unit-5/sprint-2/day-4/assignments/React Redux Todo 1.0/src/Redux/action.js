/** @format */

//action creator functions here

import {
  ADD_TODOS_ERROR,
  ADD_TODOS_REQUEST,
  ADD_TODOS_SUCCESS,
  GET_TODOS_ERROR,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "./actionTypes";

export let getTodoRequest = () => {
  return { type: GET_TODOS_REQUEST };
};
export let getTodoSuccess = (payload) => {
  return { type: GET_TODOS_SUCCESS, payload };
};
export let getTodoError = () => {
  return { type: GET_TODOS_ERROR };
};

export let postTodoRequest = () => {
  return { type: ADD_TODOS_REQUEST };
};
export let postTodoSuccess = (payload) => {
  return { type: ADD_TODOS_SUCCESS, payload };
};
export let postTodoError = () => {
  return { type: ADD_TODOS_ERROR };
};

/*
export const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_ERROR = "GET_TODOS_ERROR";

export const ADD_TODOS_REQUEST = "ADD_TODOS_REQUEST";
export const ADD_TODOS_SUCCESS = "ADD_TODOS_SUCCESS";
export const ADD_TODOS_ERROR = "ADD_TODOS_ERROR";
*/
