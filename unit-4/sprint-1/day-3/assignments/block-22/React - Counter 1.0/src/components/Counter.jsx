import React, { useState } from "react"

export default function Counter(){
let [counter,setCounter]=useState(0)

let handleClick=(val)=>{
    setCounter(counter+val)
};

let handleDouble=(val)=>{
    setCounter(counter*val)
}

    return <div>
        <h2  data-testid="counter-header">Counter</h2>
        <h3 data-testid='count'>{counter}</h3>

        <button and data-testid = 'add-btn' onClick={()=>handleClick(1)}>+</button> 
        <button data-testid = 'subtract-btn' onClick={()=>handleClick(-1)}>-</button> 
        <button data-testid = 'double-btn' onClick={()=>handleDouble(2)}>Double</button>

    </div>
}