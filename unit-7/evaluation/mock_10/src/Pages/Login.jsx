import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ERROR, REQUEST, SUCCESS } from '../Redux/Login/type'
import { useNavigate } from 'react-router-dom'
let obj={
    email:'',
    password:''
}
export const Login = () => {
    let [state,setState]=useState(obj)

    let navigate=useNavigate()

    let {token}=useSelector((store)=>store.loginReducer)
console.log(token)

    let dispatch=useDispatch()

    let handleChange=(e)=>{
        let val=e.target.value;
        let name=e.target.name;
        setState({...state,[name]:val})
        
    }

    let handleSubmit=(e)=>{
        e.preventDefault()
        dispatch({type:REQUEST})
        axios.post('https://reqres.in/api/login',state).then((res)=>{
           let token=res.data.token
            dispatch({type:SUCCESS,payload:token})
            {token && navigate('/dashbord')}
        }).catch((err)=>{
            alert("wrong Credentials")
            dispatch({type:ERROR})
        })
    }


  return (
    <div>
        <h1>Login Page</h1>

        <form onSubmit={handleSubmit}>
            <label>Email :- </label>
            <input onChange={handleChange} placeholder='Email' type='email' name='email'/><br/><br/>
            <label>Password :- </label>
            <input onChange={handleChange} placeholder='password' type='password' name='password'/><br/><br/>
            <input type='submit'/>
        </form>
    </div>
  )
}
