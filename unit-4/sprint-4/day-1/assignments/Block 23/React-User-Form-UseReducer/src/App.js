import { useReducer, useState } from "react";
import "./App.css";
import { UserRow } from "./Component/UserRow";

//print as `married` else `unmarried`

const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

//should have the cases "name", "gender", "role", "maritalStatus", and "reset" along with the default cases
const reducer = (state, action) => {
 switch (action.type) {
  case "name":{
    return {...state,name:action.payload}
  }
  case "gender":{
    return {...state, gender:action.payload}
  }
  case "role":{
    return {...state, role:action.payload}
  }
  case "maritalStatus":{
    return {...state,maritalStatus:action.payload }
  }
  case "reset":{
    return state =initialState
  }
  default:{
    return state
  }
  break
 }

};

function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.
  let [state,dispatch]=useReducer(reducer,initialState)

  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState([]);

let handleChange=(e)=>{
//  console.log( e.target.name)
 let val=e.target.type==="checkbox" ? e.target.checked:e.target.value;
 let name=e.target.name;
 dispatch({type:name,payload:val})
};

let handleSubmit=(e)=>{
  e.preventDefault()
  setSubmittedData([...submittedData,state])
  Reset()
  
}

let Reset=()=>{
dispatch({type:'reset'})
}

console.log(submittedData)
  return (
    <div className="App">
      <div>
        <h1>User Form</h1>
        <h3>useReducer</h3>
        <div className="form-wrapper" data-testid="form-wrapper">
          <form data-testid="form-element" onSubmit={handleSubmit}>
            <div className="name-wrapper" data-testid="name-wrapper">
              <label>Name</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input type="text" placeholder="Name" name="name" 
              value={state.name}
              onChange={handleChange}/>
            </div>
            <div className="gender-wrapper" data-testid="gender-wrapper">
              <label>Gender</label>
              <select name="gender" 
              value={state.gender}
              data-testid="gender-select" onChange={handleChange}> 
                <option >Male</option>
                <option >Female</option>
                <option >Prefer Not to Say</option>
              </select>
            </div>
            <div className="role-wrapper" data-testid="role-wrapper">
              <label>Role</label>
              <select name="role"
              value={state.role}
              data-testid="role-select" onChange={handleChange}>
                <option >FrontEnd Developer</option>
                <option >BackEnd Developer</option>
                <option >FullStack Developer</option>
              </select>
            </div>
            <div
              className="marital-status-wrapper"
              data-testid="marital-status-wrapper"
            >
              <legend>Martial Status</legend>
              <div>
                {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
                <input type={"checkbox"} 
                checked={state.maritalStatus}
                name="maritalStatus" onChange={handleChange}/>
                <label>Married</label>
              </div>
            </div>
            <div>
              <button type="submit" >SUBMIT</button>
            </div>
          </form>
        </div>
        <UserRow sub={submittedData}/>
      </div>
       
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export {reducer, initialState}
