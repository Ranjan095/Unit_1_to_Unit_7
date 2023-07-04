import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'

export default function Home() {

  let {setIsAuth}=useContext(AuthContext)
  return (
    <div>
      <h1 className = "home_page" >Welcome to Home Page</h1>
      <button onClick={()=>setIsAuth(false)}>LogOut</button>
    </div>
  )
}
