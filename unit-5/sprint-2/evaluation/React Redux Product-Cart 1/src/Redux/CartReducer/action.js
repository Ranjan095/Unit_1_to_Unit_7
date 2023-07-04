
import axios from "axios";
import { ADD_TO_CART } from "./actionTypes";
export const addToCart = (id)=>(dispatch) => {
  // Complete add to cart store functionality
  let url=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`
  axios.get(url).then((ele)=>{
    dispatch({type:ADD_TO_CART,payload:ele.data})
    console.log(ele.data)
  })
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.addToCart = addToCart;
}


// return {type:ADD_TO_CART,payload}