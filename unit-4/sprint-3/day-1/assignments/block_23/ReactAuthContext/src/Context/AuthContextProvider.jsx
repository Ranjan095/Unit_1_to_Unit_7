import {useState ,createContext} from 'react'

export let IsAuthContext=createContext()

export default function AuthContextProvider({children}) {
  let [isAuth,setIsAuth]=useState(false);
  let [token,setToken]=useState('');
  let [loading,setLoading]=useState(false);
  let [error,setError]=useState(null)

  
  

  return (
    <div> 
          <IsAuthContext.Provider value={{isAuth,token,setIsAuth,setToken}}>
            {children}
          </IsAuthContext.Provider>
    </div>
  )
}
