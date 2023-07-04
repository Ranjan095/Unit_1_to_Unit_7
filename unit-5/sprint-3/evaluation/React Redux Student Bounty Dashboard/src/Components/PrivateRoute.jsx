import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({children}) => {

  let location=useLocation()
  let {isAuth}=useSelector((store)=>store.authReducer);
  console.log(isAuth)

  return <div>{
    isAuth ? children: <Navigate to='/login' state={location.pathname} replace={true}/>
    }</div>;
};
