import React from 'react'
import { Link } from 'react-router-dom'


export const NabBar = () => {
  return (
    <div>
      <div style={{display:'flex',gap:'40px', justifyContent:'center',boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"}}>
      <Link to={'/'}><h3>Login</h3></Link>
        <Link to={'/dashbord'}><h3>Dashbord</h3></Link>
      </div>
    </div>
  )
}
