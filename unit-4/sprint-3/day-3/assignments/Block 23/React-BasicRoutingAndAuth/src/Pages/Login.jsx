import {useContext, useState} from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import { Navigate } from 'react-router-dom'

export default function Login() {
    let [user,setUser]=useState({email:'',password:''})


    let handleChange=(e)=>{
        // console.log(e.target.value)
        setUser({...user,[e.target.type]:e.target.value})
    }

   let { isAuth, setIsAuth}=useContext(AuthContext)

   console.log(isAuth)

   let handleSubmit=(e)=>{
    e.preventDefault();
    
    fetch('https://reqres.in/api/login',{
        method:'POST',
        headers:{'Content-Type':'Application/json'},
        body:JSON.stringify(user)
    })
    .then((res)=>res.json())
    .then((data)=>{
        let token=data.token;
        token && setIsAuth(true)
    })
    .catch((err)=>console.log(err))

   };
   console.log(user)

   
    return (
        <div>
            <form className = "auth_form" onSubmit={handleSubmit} >
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "email"
                    className = "email"
                    placeholder = "Enter Email"
                    onChange={handleChange}
                />
                <br />
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "password"
                    className = "password"
                    placeholder = "Enter password"
                    onChange={handleChange}
                />
                <br />
                <input className = "submit" type = "submit"/>

            </form>  
            {isAuth && <Navigate to='/'/>} 
        </div>
    )
}