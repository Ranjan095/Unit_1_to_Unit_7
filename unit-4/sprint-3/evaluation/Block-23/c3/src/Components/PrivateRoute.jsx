import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}) {

    let {authState,loginUser,logoutUser}=useContext(AuthContext)

    return !authState?.isAuth ? <Navigate to='/login'/>:children
}

export default PrivateRoute;

