import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"

export let login=(obj)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
return axios.post(`https://reqres.in/api/login`,obj).then((res)=>{
    dispatch({type:LOGIN_SUCCESS,payload:res.data.token})
    console.log(res.data.token)
}).catch((error)=>{
    dispatch({type:LOGIN_FAILURE})
})
}