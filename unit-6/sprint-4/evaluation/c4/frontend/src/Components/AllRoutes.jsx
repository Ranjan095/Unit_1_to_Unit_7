import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Signup } from './Signup'
import { Login } from './Login'



export const AllRoutes = () => {
  return (
    <div>
          <Routes>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>

  
   </Routes>
    </div>
  )
}
