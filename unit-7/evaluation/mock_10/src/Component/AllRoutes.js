import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../Pages/Login'
import { Dashbord } from '../Pages/Dashbord'
import { PrivateRoute } from './PrivateRoute'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/dashbord' element={<PrivateRoute><Dashbord/></PrivateRoute>}/>
            {/* <Route path='/dashbord' element={<Dashbord/>}/> */}
        </Routes>
    </div>
  )
}
