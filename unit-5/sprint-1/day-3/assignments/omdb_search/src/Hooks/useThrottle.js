import React, { useRef } from 'react'

const useThrottle = (myFun,delay) => {
  let {current:wait}=useRef(false)
return ()=>{
    if(wait) return;
    myFun()
    wait=true
    setTimeout(() => {
        wait=false;
    }, delay);
}
}

export default useThrottle