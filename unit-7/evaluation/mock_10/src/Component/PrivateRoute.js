import { useSelector } from "react-redux";



import React from 'react'
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {
    let {token}=useSelector((store)=>store.loginReducer);
    console.log(token)
 

    return !token ? <Navigate to={'/'} />:children
 
}
