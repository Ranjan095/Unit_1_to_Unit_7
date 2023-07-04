import React, {useState} from 'react';
import { createContext } from 'react';

export let AuthContext=createContext();

// {isAuth, setIsAuth, token, setToken}
export default function AuthContextProvider({children}) {
let [isAuth,setIsAuth]=useState(false);
let [token,setToken]=useState('')


  return (
    <div>
      <AuthContext.Provider value={{isAuth, setIsAuth, token, setToken}}>
        {children}
        </AuthContext.Provider>
    </div>
  )
}
