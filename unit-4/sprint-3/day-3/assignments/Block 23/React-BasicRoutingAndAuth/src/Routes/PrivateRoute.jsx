import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
let {isAuth}=useContext(AuthContext)

  return !isAuth?<Navigate to='/login'/>:children
}

export default PrivateRoute