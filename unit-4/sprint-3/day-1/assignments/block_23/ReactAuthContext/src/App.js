import {useContext} from 'react'
import Login from './Components/Login'
import { Dashboard } from './Components/Dashboard';
import { IsAuthContext } from './Context/AuthContextProvider';

export default function App() {
  let {isAuth,token}=useContext(IsAuthContext)
// console.log(isAuth,token)
  return (
    <div>
        <Login />
      {/* should handle the conditional rendering between Login and Dashboard*/}
        <Dashboard token={token}/>
    </div>
  )
}
