import React from "react"
import { IsAuth } from "./AuthContext/AuthContext"
export default function Nav(){
    let val=React.useContext(IsAuth)
    let {isAuth,login,logout}=val;
    console.log(isAuth)

    return(
        <div style={{display:'flex', justifyContent:'space-around'}}>
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Contect</h3>
            <h3>isAuth :{isAuth?'Yes':"No"}</h3>
            <h3>Register</h3>
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>
        </div>
    )
}