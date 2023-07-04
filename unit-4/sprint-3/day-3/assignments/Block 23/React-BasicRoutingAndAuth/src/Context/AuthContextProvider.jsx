
import { createContext, useState } from "react";

export let  AuthContext=createContext();

let AuthContextProvider=({children})=>{
    let [isAuth,setIsAuth]=useState(false);

// let login=()=>{
//     setIsAuth(true)
// };

// let logOut=()=>{
//     setIsAuth(false)
// }


    return <AuthContext.Provider value={{ isAuth, setIsAuth}}>
        {children}
        </AuthContext.Provider>
}
export {AuthContextProvider}