// /** @format */

import { useState,useContext } from "react";
import{IsAuthContext} from '../Context/AuthContextProvider'


let obj = {
  email: "",
  password: "",
};

export default function Login() {
  let [state, setState] = useState(obj);
  let [user,setUser]=useState({})

  let {email,password}=state;

  let {isAuth,token,setIsAuth,setToken}=useContext(IsAuthContext)
  console.log(isAuth,token)

  let handleChange = (e) => {
    // console.log(e.target.value)
    setState({...state, [e.target.name]: e.target.value });
    // console.log(state);
  };

  let handleSubmit=(e)=>{
    e.preventDefault();
    setUser(state)
    setState(obj)

    // fetch('https://reqres.in/api/login',{
    //     method:"POST",
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(user)
    // })
  }
//   console.log(user)

async function getData(){
    try {
      let res=await fetch('https://reqres.in/api/login',{
        method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
      })
      let  data=await res.json()
      setToken(data.token)

    } catch (error) {
        
    }
}
    
getData()

  return (
    <div>
      <form data-testid="auth_form"
      onSubmit={handleSubmit}
      >
        <input
            value={email}
          type="email"
          data-testid="email"
          placeholder="Enter Email"
          name="email"
          onChange={handleChange}
        />
        <br />
        <input
        value={password}
          type="password"
          data-testid="password"
          placeholder="Enter password"
          name="password"
          onChange={handleChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
