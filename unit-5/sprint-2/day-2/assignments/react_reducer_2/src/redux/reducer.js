/** @format */

import React from "react";
import { GET_DATA_PENDING, GET_DATA_REQUEST, GET_DATA_SUCCESS, POST_DATA_PENDING, POST_DATA_REQUEST, POST_DATA_SUCCESS } from "./actionType";

// let initialState={
//     todos:[],
//     isLoading:false,
//     isErr:false
// }

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQUEST :{
        return {...state,isLoading:true}
    };
    case GET_DATA_SUCCESS :{
        return {...state,isLoading:false,todos:[...payload]}
    };
    case GET_DATA_PENDING :{
        return {...state,isLoading:false,isErr:true}
    };
    case POST_DATA_REQUEST :{
      return {...state,isLoading:true}
    };
    case POST_DATA_SUCCESS :{
      return {...state,isLoading:false,todos:[...state.todos,payload]}
    };
    case POST_DATA_PENDING :{
      return {...state,isLoading:false,isErr:true}
    }
    default: {
      return state;
    }
  }
};
