import {useContext} from 'react'
import { IsAuthContext } from '../Context/AuthContextProvider'


export const Dashboard = ({token}) => {
    let {setIsAuth,setToken}=useContext(IsAuthContext)
    // console.log(setIsAuth,setToken)
    return (
        <div >
            <h3 data-testid = "token" >Token: {token}</h3>
            <button data-testid = "logout" onClick={()=>setToken('')}>LOGOUT</button>
        </div>
    )
}
