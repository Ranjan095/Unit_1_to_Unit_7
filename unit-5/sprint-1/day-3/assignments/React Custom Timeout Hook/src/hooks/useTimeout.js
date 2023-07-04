import { useEffect, useRef, useState } from "react";

const useTimeout = (delay) => {
    let [ready,setReady]=useState(false)
    // let {current:ready}=useRef(false)
    useEffect(()=>{
        setTimeout(() => {
            setReady(!ready)
        }, delay);
    },[])
    return {ready}
};

export default useTimeout;
