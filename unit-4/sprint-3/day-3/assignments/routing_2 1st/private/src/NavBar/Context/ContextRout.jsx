
import { createContext, useState } from "react";


export let ContextRout = createContext();

export default function CreateContextProvider({ children }) {
    let [isAuth, setAuth] = useState(false)

    function login() {
        setAuth(true)
    };

    function logOut() {
        setAuth(false)
    }

    return <ContextRout.Provider value={{ isAuth, login, logOut }}>
        {children}
    </ContextRout.Provider>
}