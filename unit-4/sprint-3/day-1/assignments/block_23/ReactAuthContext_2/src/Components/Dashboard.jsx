import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'

export const Dashboard = () => {

    let {isAuth, setIsAuth, token, setToken}=useContext(AuthContext)
    console.log(isAuth,token)
    // console.log(isAuth,token)

    return (
        <div >
            <h3 data-testid = "token" >Token:{token}</h3>
            <button data-testid = "logout" onClick={()=>{
                setIsAuth(false)
                setToken('')
            }}>LOGOUT</button>
        </div>
    )
}
