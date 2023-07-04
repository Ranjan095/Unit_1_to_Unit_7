import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashbord } from '../Pages/Dashbord'
import { SinglePage } from '../Pages/SinglePage'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Dashbord/>}/>
            <Route path=":userId" element={<SinglePage/>}/>
        </Routes>
    </div>
  )
}
