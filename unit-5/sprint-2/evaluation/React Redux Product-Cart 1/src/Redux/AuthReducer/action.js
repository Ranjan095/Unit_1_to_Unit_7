

import axios from "axios";
import { LOGIN_REQUEST } from "./actionTypes";
import { LOGIN_SUCCESS } from "./actionTypes";
import { LOGIN_FAILURE } from "./actionTypes";

 /*
  export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
  */

export const loginREquest = () => {
  // Complete login Functionality
  return {type:LOGIN_REQUEST}
};
export const loginSuccess=(payload)=>{
  return {type:LOGIN_SUCCESS,payload}
}
export const loginFailure=()=>{
  return{type:LOGIN_FAILURE}
}

export const login = (obj,dispatch) => {
  // Complete login Functionality
  dispatch(loginREquest())
 axios.post("https://reqres.in/api/login",obj).then((res)=>{
  dispatch(loginSuccess(res.data.token))
  console.log(res.data.token)
 }).catch((err)=>{
  dispatch(loginFailure())
 })
};



// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.login = login;
}
