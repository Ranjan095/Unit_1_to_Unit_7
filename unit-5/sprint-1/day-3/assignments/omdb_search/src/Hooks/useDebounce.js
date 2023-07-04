import React, { useEffect, useRef, useState } from 'react'

const useDebounce = (fun,delay) => {
let {current:id}=useRef()

return ()=>{
  id && clearTimeout(id)
 id= setTimeout(() => {
    fun()
  }, delay);
}


}

export default useDebounce