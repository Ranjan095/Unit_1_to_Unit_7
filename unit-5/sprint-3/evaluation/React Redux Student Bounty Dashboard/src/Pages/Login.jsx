import { useState } from "react";
import styled from "styled-components";
import { login } from "../Redux/AuthReducer/action";
import { useDispatch,useSelector  } from 'react-redux'
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  let [email,setEmail]=useState('');
  let [password,setPassword]=useState('');

  let location=useLocation()
  let navigate=useNavigate()
  let dispatch=useDispatch()
  let store=useSelector((store)=>store);
  console.log(store)

let handleClick=()=>{
let obj={
  email,
  password
}
// login(obj)
dispatch(login(obj)).then(()=>{
  navigate(location.state,{replace:true})
})

}

  return (
    <DIV>
      <h2>Log In</h2>
      
      <input data-testid="user-email" type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />
      <button data-testid="user-login" onClick={handleClick}>Log In</button>
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
