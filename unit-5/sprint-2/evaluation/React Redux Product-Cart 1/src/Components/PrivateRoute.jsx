import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {

  let {isAuth,isError,isLoading,token}=useSelector((store)=>store.authReducer)

  return <>
  {/* Complete this higher order component  */}
{!isAuth?<Navigate to='/login'/>:children}
  
  </>;
};
