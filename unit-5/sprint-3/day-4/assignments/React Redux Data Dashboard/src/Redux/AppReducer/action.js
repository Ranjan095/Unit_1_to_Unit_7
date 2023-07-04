
import axios from 'axios'

/**
 * coffeeData: [],
restaurantData: [],
employeeData : []
 */


export let getcoffeeData=(dispatch)=>{
   
    axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee').then((res)=>{
        dispatch({type:'GET_COFFEE_DATA_SUCCESS',payload:res.data.data})
        // console.log(res)
    })
}
// GET_RESTAURANT_DATA
export let getRestaurantData=(dispatch)=>{
    axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants').then((res)=>{
        dispatch({type:'GET_RESTAURANT_DATA',payload:res.data.data})
        console.log(res)
    })
};

export let getemployeeData=(dispatch)=>{
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`).then((res)=>{
        dispatch({type:'GET_EMPLOYEE_DATA',payload:res.data.data})
        
    })
}