import React, { createContext, useState } from "react";

export let IsAuth= React.createContext()


export default function AuthProvider({children}){
    let [isAuth,setisAuth]=useState(true);

    let login=()=>{
        setisAuth(true)
    };
    let logout=()=>{
        setisAuth(false)
    }

    return(
        <div>
            <IsAuth.Provider value={{isAuth,login,logout}}>
                {children}
            </IsAuth.Provider>
        </div>
    )
}