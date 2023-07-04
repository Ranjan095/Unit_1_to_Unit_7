
import { Link } from "react-router-dom";
import { ContextRout } from "./Context/ContextRout";
import { useContext } from "react";

let link=[
    {path:'/',title: 'Home'},
    {path:'/login', title:'Login'},
    {path:'setting', title:'Setting'},
    {path:'/dashboard', title:'Dashboard'}
];

export default function NavBar(){
    let {isAuth,logOut}=useContext(ContextRout)

    return (
        <div style={{display:'flex',justifyContent:'space-around',background:'pink'}}>
        {link.map((ele)=><Link style={{padding:'15px'}} key={ele.path} to={ele.path}>{ele.title}</Link>)}
        <h5>Authantication: {isAuth?'Yes':'NO'}</h5>
        <button disabled={isAuth==false} onClick={logOut}>Log out</button>
        </div>
    )
}