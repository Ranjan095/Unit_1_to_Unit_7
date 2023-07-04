

import React from 'react'
import { useState } from "react";

let obj = {
  username: "",
  password: "",
  country: "",
  age:'',
  ismarried:false
};

const Form = () => {
    let [state, setState] = useState(obj);
    let {username,password,country,age,ismarried}=state;
  
  
    let handleChange = (e) => {
      // console.log(e.target.type);
     let inputVal=e.target.type==='checkbox'?e.target.checked:e.target.value
     setState({...state,[e.target.name]:inputVal})
    };
  //   console.log(state)
  
    let handleSubmit=(e)=>{
      e.preventDefault()
      console.log(state)
    }
  return (
    <div>
      <h1>Registration Form</h1>
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <label>
          Username :
          <input
            name="username"
            onChange={handleChange}
            placeholder="UserName.."
          ></input>
        </label>
        <br></br>
        <br></br>
        <label>
          Password :<input 
          type='number'
          name='password'
          onChange={handleChange}
          placeholder="password..">

          </input>
        </label>
        <br></br>
        <br></br>
        <label>
          age :<input 
          type='number'
          name='age'
          onChange={handleChange}
          placeholder="age..">

          </input>
        </label>
        <br></br>
        <br></br>
        <label>
          Country :
          <select name="country" 
          onChange={handleChange}
          >
            <option value="">select</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="nepal">Nepal</option>
          </select>
        </label>
        <br></br>
        <br></br>
        <label>
          Ismarried :
          <input 
          name='ismarried'
          onChange={handleChange}
          type="checkbox"
          
          >
          </input>
        </label><br></br><br></br>
        <input type="submit" placeholder="submit"></input>
        <br></br>
        <br></br>
      </form>
    </div>
  )
}

export default Form