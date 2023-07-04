/** @format */

import {
  GET_DATA_PENDING,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  POST_DATA_PENDING,
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
} from "./actionType";
/* for get data */
export let todoRequestAction = () => {
  return { type: GET_DATA_REQUEST };
};

export let todoSuccessAction = (payload) => {
  return { type: GET_DATA_SUCCESS, payload };
};

export let todoPendingAction = () => {
  return { type: GET_DATA_PENDING };
};

/* for post data */

export let todoPostRequestAction=()=>{
  return {type:POST_DATA_REQUEST}
};
export let todoPostSuccessAction=(payload)=>{
  return {type:POST_DATA_SUCCESS,payload}
};
export let todoPostPendingAction=()=>{
  return {type:POST_DATA_PENDING}
}