import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    let [isUserOnline,setUserOnline]=useState(false)
    let isOnline=navigator.onLine;
    useEffect(()=>{
        isOnline ? setUserOnline(true):setUserOnline(false)
        // console.log(isOnline)
    },[isUserOnline])
    
    return isUserOnline
};

export default useOnlineStatus;
