import React from 'react'
import { Link } from 'react-router-dom'

let link=[
  {path:'/', title:'Home'},
  {path:'/contact', title:'Contact'},
  {path:'/about-us', title:'About'},
  {path:'/services', title:'Services'},
  {path:'/login', title:'Login'}
];

function NavBar() {
  return (
    <>
    {link.map((links)=><Link to={links.path}>{links.title}</Link>)}
    </>
  )
}

export default NavBar
