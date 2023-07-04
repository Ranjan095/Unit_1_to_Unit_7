import * as types from "./actionType";

const initialState = {
coffeeData: [],
restaurantData: [],
employeeData : []
};

const reducer = (state = initialState,{type,payload}) => {
  switch(type){
    case 'GET_COFFEE_DATA_SUCCESS':{
      return {...state,coffeeData:[...payload]}
    };
    case 'GET_RESTAURANT_DATA':{
      return {...state,restaurantData:[...payload]}
    };
    case 'GET_EMPLOYEE_DATA':{
      return {...state,employeeData:[...payload]}
    }
    default :{
      return state;
    }
  }
  // return state
};

export { reducer };