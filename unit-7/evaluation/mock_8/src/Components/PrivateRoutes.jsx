
import React from 'react'

import { Navigate, useLocation } from 'react-router';

export const PrivetRoute = ({children}) => {


let users=JSON.parse(localStorage.getItem("isAuth"))


   
      let location=useLocation();
      // console.log(location)
return users?.userName? children : <Navigate to="/login" state={location.pathname} replace/>


}