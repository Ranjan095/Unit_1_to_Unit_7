import { useContext } from "react"
import { ContextRout } from "../NavBar/Context/ContextRout" 
 
 export default function Login(){
let {login,logOut}=useContext(ContextRout)
   
    return (
      <div>
         <h1>Login Component</h1>

         <button onClick={login}>Login</button>
      </div>
    )
 }