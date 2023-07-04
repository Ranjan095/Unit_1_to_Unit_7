import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-around'}}>
        <Link to="/signup">{"signUp"}</Link>
        <Link to="/login">{"Login"}</Link>
    
    </div>
  )
}
