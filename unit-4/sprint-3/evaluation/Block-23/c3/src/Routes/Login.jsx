import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";


function Login() {
let [email,setEmail]=useState('');
let [password,setPassword]=useState('');
let {authState,loginUser,logoutUser}=useContext(AuthContext)
let [dis,setDis]=useState(false)

console.log(authState)

let navigate=useNavigate();

let handleSubmit=(e)=>{
  e.preventDefault();
  setDis(true)
 
fetch('https://reqres.in/api/login',{
  method:'POST',
  headers:{'Content-Type':'Application/json'},
  body:JSON.stringify({email,password})
})
.then((res)=>res.json())
.then((obj)=>{
  let token=obj.token;
  if(token){
    loginUser(token);
    navigate('/dashboard')
  }
})
.catch((err)=>console.log(err))
}


  return (
    <div>
      <form data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              onChange={(e)=>setPassword(e.target.value)} 
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" disabled={dis}/>
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
