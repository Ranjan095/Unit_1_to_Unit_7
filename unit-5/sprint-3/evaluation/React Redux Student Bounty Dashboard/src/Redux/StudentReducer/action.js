import axios from "axios"
import { STUDENT_REQUEST_FAILURE, STUDENT_REQUEST_PENDING, STUDENT_REQUEST_SUCCESS } from "./actionTypes"


export let getData=(filterdata)=>(dispatch)=>{
    dispatch({type:STUDENT_REQUEST_PENDING})
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/students`,filterdata).then((res)=>{
        dispatch({type:STUDENT_REQUEST_SUCCESS,payload:res.data})
        console.log(res.data)
    }).catch((error)=>{
        dispatch({type:STUDENT_REQUEST_FAILURE})
    })
}