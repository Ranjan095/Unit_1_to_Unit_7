import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { ContextRout } from "../NavBar/Context/ContextRout";


export default function PraviteRoutes({children}){
    let {isAuth}=useContext(ContextRout)

    if(isAuth){
        return children;
    
    }
    else{
        return <Navigate to='/login'/>
    }
}