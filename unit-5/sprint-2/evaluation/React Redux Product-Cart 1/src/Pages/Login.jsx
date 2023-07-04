import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../Redux/AuthReducer/action";

export const Login = () => {
  let [email,setEmail]=useState('');
  let [password,setPassword]=useState('')

  let {isAuth,isError,isLoading,token}=useSelector((store)=>store.authReducer)
  console.log(token)

  let dispatch=useDispatch()

  let handleClick=()=>{
    let obj={
      email,password
    }
    login(obj,dispatch)
  }



  return (
    <DIV>
      <h2>Log In</h2>
      <input onChange={(e)=>setEmail(e.target.value)} data-testid="user-email" type="email" placeholder="Email" />
      <input onChange={(e)=>setPassword(e.target.value)}
        data-testid="user-password"
        type="password"
        placeholder="Password"
      />
      <button onClick={handleClick} data-testid="user-login">Log In</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;
  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }
  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
