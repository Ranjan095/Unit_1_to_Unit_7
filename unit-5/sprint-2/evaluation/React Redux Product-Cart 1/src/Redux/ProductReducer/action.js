
import axios from "axios";
import { GET_PRODUCT_REQUEST } from "./actionTypes";
import { GET_PRODUCT_SUCCESS } from "./actionTypes";
import { GET_PRODUCT_FAILURE } from "./actionTypes";




export const getProductRequest = () => {
  // Complete get products functionality here
  return {type:GET_PRODUCT_REQUEST}
};
export const getProductSuccess = (payload) => {
  // Complete get products functionality here
  return {type:GET_PRODUCT_SUCCESS,payload}
};
export const getProductFailure = () => {
  // Complete get products functionality here
  return {type:GET_PRODUCT_FAILURE}
};



let url=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`

export const getProducts=(dispatch)=>{
  
  dispatch(getProductRequest())
  axios.get(url).then((res)=>{
    dispatch(getProductSuccess(res.data))
    // console.log(res.data)
  }).catch((err)=>{
    dispatch(getProductFailure())
  })
}


// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.getProducts = getProducts;
}
