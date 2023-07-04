import React from 'react'
import { useState } from 'react'
const Counter = () => {
let [count,setCount]=useState(0);

let hancleClick=(val)=>{
setCount(count+val)
}

  return (
    <div>
        <h2 data-testid = "counter-header">Counter</h2>
        <h3 data-testid = "count">{count}</h3>
        <button onClick={()=>hancleClick(-1)} data-testid = "subtract-btn">-</button>
        <button onClick={()=>hancleClick(+1)} data-testid = "add-btn">+</button>
        <button onClick={()=>setCount(count*2)} data-testid = "double-btn">Double</button>
    </div>
  )
}

export default Counter